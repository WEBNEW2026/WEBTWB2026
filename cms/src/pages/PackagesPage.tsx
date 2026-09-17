import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, X, Save } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Package } from '../types';
import { useToast } from '../contexts/ToastContext';

const PackagesPage: React.FC = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | undefined>(undefined);
    const { showToast } = useToast();

    // Form state
    const [formData, setFormData] = useState<Partial<Package>>({
        title: '',
        subtitle: '',
        duration: '',
        price: 0,
        unit: 'pax',
        type: 'family',
        status: 'active',
        includes: [],
        image: ''
    });
    const [includeInput, setIncludeInput] = useState('');

    useEffect(() => {
        loadPackages();
    }, []);

    useEffect(() => {
        if (selectedPackage) {
            setFormData(selectedPackage);
        } else {
            setFormData({
                title: '',
                subtitle: '',
                duration: '',
                price: 0,
                unit: 'pax',
                type: 'family',
                status: 'active',
                includes: [],
                image: ''
            });
        }
    }, [selectedPackage, showModal]);

    const loadPackages = async () => {
        try {
            const data = await dataService.getPackages();
            setPackages(data);
        } catch (error) {
            console.error('Failed to load packages:', error);
            showToast('Failed to load packages', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this package?')) return;
        try {
            await dataService.deletePackage(id);
            await loadPackages();
            showToast('Package deleted successfully', 'success');
        } catch (error) {
            console.error('Failed to delete package:', error);
            showToast('Failed to delete package', 'error');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (selectedPackage) {
                await dataService.updatePackage(selectedPackage.id, formData);
                showToast('Package updated successfully', 'success');
            } else {
                await dataService.createPackage(formData as Omit<Package, 'id' | 'createdAt' | 'updatedAt'>);
                showToast('Package created successfully', 'success');
            }
            await loadPackages();
            setShowModal(false);
            setSelectedPackage(undefined);
        } catch (error) {
            console.error('Failed to save package:', error);
            showToast('Failed to save package', 'error');
        }
    };

    const handleAddInclude = () => {
        if (includeInput.trim()) {
            setFormData(prev => ({
                ...prev,
                includes: [...(prev.includes || []), includeInput.trim()]
            }));
            setIncludeInput('');
        }
    };

    const handleRemoveInclude = (index: number) => {
        setFormData(prev => ({
            ...prev,
            includes: prev.includes?.filter((_, i) => i !== index)
        }));
    };

    const filteredPackages = packages.filter(pkg =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Packages Management</h1>
                    <p className="text-gray-600 mt-2">Manage tour packages and special offers</p>
                </div>
                <button
                    onClick={() => {
                        setSelectedPackage(undefined);
                        setShowModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New Package
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search packages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10"
                    />
                </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map(pkg => (
                    <div key={pkg.id} className="card p-0 overflow-hidden flex flex-col h-full">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${pkg.type === 'family' ? 'bg-blue-100 text-blue-700' :
                                    pkg.type === 'romantic' ? 'bg-pink-100 text-pink-700' :
                                        'bg-gray-100 text-gray-700'
                                    }`}>
                                    {pkg.type}
                                </span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${pkg.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {pkg.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                            <p className="text-gray-500 text-sm mb-4">{pkg.subtitle}</p>

                            <div className="space-y-2 mb-6 flex-1">
                                <p className="text-sm font-medium text-gray-700">Includes:</p>
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    {pkg.includes.slice(0, 3).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    {pkg.includes.length > 3 && <li>+{pkg.includes.length - 3} more</li>}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t mt-auto">
                                <div>
                                    <p className="text-sm text-gray-500">Price per {pkg.unit}</p>
                                    <p className="text-lg font-bold text-primary-600">
                                        Rp {pkg.price.toLocaleString('id-ID')}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setSelectedPackage(pkg);
                                            setShowModal(true);
                                        }}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pkg.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">
                                {selectedPackage ? 'Edit Package' : 'Add New Package'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                    <select
                                        value={formData.type}
                                        onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                                        className="w-full p-2 border rounded-lg"
                                    >
                                        <option value="family">Family</option>
                                        <option value="romantic">Romantic</option>
                                        <option value="corporate">Corporate</option>
                                        <option value="wellness">Wellness</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                                <input
                                    type="text"
                                    value={formData.subtitle}
                                    onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                                    required
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                    <input
                                        type="number"
                                        value={formData.price}
                                        onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                                    <input
                                        type="text"
                                        value={formData.unit}
                                        onChange={e => setFormData({ ...formData, unit: e.target.value })}
                                        placeholder="pax"
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                    <input
                                        type="text"
                                        value={formData.duration}
                                        onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                        placeholder="2 Days 1 Night"
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="text"
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Includes</label>
                                <div className="flex gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={includeInput}
                                        onChange={e => setIncludeInput(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddInclude())}
                                        className="flex-1 p-2 border rounded-lg"
                                        placeholder="Add item..."
                                    />
                                    <button type="button" onClick={handleAddInclude} className="bg-blue-600 text-white p-2 rounded-lg">
                                        <Plus size={20} />
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.includes?.map((item, i) => (
                                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            {item}
                                            <button type="button" onClick={() => handleRemoveInclude(i)}><X size={14} /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                    className="w-full p-2 border rounded-lg"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                                    <Save size={20} /> Save Package
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackagesPage;
