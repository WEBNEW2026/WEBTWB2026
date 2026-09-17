import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Eye } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Villa } from '../types';
import VillaFormModal from '../components/features/VillaFormModal';
import { useToast } from '../contexts/ToastContext';

const VillasPage: React.FC = () => {
    const [villas, setVillas] = useState<Villa[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCluster, setFilterCluster] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedVilla, setSelectedVilla] = useState<Villa | undefined>(undefined);
    const { showToast } = useToast();

    useEffect(() => {
        loadVillas();
    }, []);

    const loadVillas = async () => {
        try {
            const data = await dataService.getVillas();
            setVillas(data);
        } catch (error) {
            console.error('Failed to load villas:', error);
            showToast('Failed to load villas', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this villa?')) return;

        try {
            await dataService.deleteVilla(id);
            await loadVillas();
            showToast('Villa deleted successfully', 'success');
        } catch (error) {
            console.error('Failed to delete villa:', error);
            showToast('Failed to delete villa', 'error');
        }
    };

    const handleSave = async (villaData: Omit<Villa, 'id' | 'createdAt' | 'updatedAt'> | Villa) => {
        try {
            if (selectedVilla) {
                // Update existing villa
                await dataService.updateVilla(selectedVilla.id, villaData);
                showToast('Villa updated successfully', 'success');
            } else {
                // Create new villa
                await dataService.createVilla(villaData as Omit<Villa, 'id' | 'createdAt' | 'updatedAt'>);
                showToast('Villa created successfully', 'success');
            }
            await loadVillas();
            setShowModal(false);
            setSelectedVilla(undefined);
        } catch (error) {
            console.error('Failed to save villa:', error);
            showToast('Failed to save villa', 'error');
        }
    };

    const filteredVillas = villas.filter((villa) => {
        const matchesSearch = villa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            villa.cluster.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCluster = filterCluster === 'all' || villa.cluster === filterCluster;
        return matchesSearch && matchesCluster;
    });

    const clusters = Array.from(new Set(villas.map(v => v.cluster)));

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Villas Management</h1>
                    <p className="text-gray-600 mt-2">Manage all villa listings and availability</p>
                </div>
                <button
                    onClick={() => {
                        setSelectedVilla(undefined);
                        setShowModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New Villa
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search villas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input-field pl-10"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <select
                            value={filterCluster}
                            onChange={(e) => setFilterCluster(e.target.value)}
                            className="input-field pl-10"
                        >
                            <option value="all">All Clusters</option>
                            {clusters.map((cluster) => (
                                <option key={cluster} value={cluster}>
                                    {cluster}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Total Villas</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{villas.length}</p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Active</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        {villas.filter(v => v.status === 'active').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Maintenance</p>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">
                        {villas.filter(v => v.status === 'maintenance').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Inactive</p>
                    <p className="text-3xl font-bold text-red-600 mt-2">
                        {villas.filter(v => v.status === 'inactive').length}
                    </p>
                </div>
            </div>

            {/* Villas Table */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Villa</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cluster</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capacity</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price (Weekday)</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredVillas.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No villas found
                                    </td>
                                </tr>
                            ) : (
                                filteredVillas.map((villa) => (
                                    <tr key={villa.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={villa.image}
                                                    alt={villa.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-900">{villa.name}</p>
                                                    {villa.badge && (
                                                        <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                                                            {villa.badge}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">{villa.cluster}</td>
                                        <td className="px-6 py-4 text-gray-900">{villa.capacity}</td>
                                        <td className="px-6 py-4 text-gray-900 font-semibold">
                                            Rp {villa.priceWeekday.toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${villa.status === 'active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : villa.status === 'maintenance'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-red-100 text-red-700'
                                                    }`}
                                            >
                                                {villa.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setSelectedVilla(villa);
                                                        setShowModal(true);
                                                    }}
                                                    className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(villa.id)}
                                                    className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <VillaFormModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    setSelectedVilla(undefined);
                }}
                onSave={handleSave}
                initialData={selectedVilla}
            />
        </div>
    );
};

export default VillasPage;
