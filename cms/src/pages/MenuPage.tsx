import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, X, Save, Utensils } from 'lucide-react';
import { dataService } from '../services/dataService';
import { MenuItem } from '../types';

const MenuPage: React.FC = () => {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MenuItem | undefined>(undefined);

    // Form state
    const [formData, setFormData] = useState<Partial<MenuItem>>({
        name: '',
        description: { id: '', en: '', zh: '' },
        price: 0,
        image: '',
        category: 'mains',
        isSignature: false,
        isAvailable: true
    });

    useEffect(() => {
        loadItems();
    }, []);

    useEffect(() => {
        if (selectedItem) {
            setFormData(selectedItem);
        } else {
            setFormData({
                name: '',
                description: { id: '', en: '', zh: '' },
                price: 0,
                image: '',
                category: 'mains',
                isSignature: false,
                isAvailable: true
            });
        }
    }, [selectedItem, showModal]);

    const loadItems = async () => {
        try {
            const data = await dataService.getMenuItems();
            setItems(data);
        } catch (error) {
            console.error('Failed to load menu items:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            await dataService.deleteMenuItem(id);
            await loadItems();
        } catch (error) {
            console.error('Failed to delete item:', error);
            alert('Failed to delete item');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (selectedItem) {
                await dataService.updateMenuItem(selectedItem.id, formData);
            } else {
                await dataService.createMenuItem(formData as Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>);
            }
            await loadItems();
            setShowModal(false);
            setSelectedItem(undefined);
        } catch (error) {
            console.error('Failed to save item:', error);
            alert('Failed to save item');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent as keyof MenuItem] as any,
                    [child]: value
                }
            }));
        } else if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
        }
    };

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Restaurant Menu</h1>
                    <p className="text-gray-600 mt-2">Manage food and beverage items</p>
                </div>
                <button
                    onClick={() => {
                        setSelectedItem(undefined);
                        setShowModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New Item
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input-field pl-10"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="input-field pl-10"
                        >
                            <option value="all">All Categories</option>
                            <option value="mains">Mains</option>
                            <option value="beverages">Beverages</option>
                            <option value="bites">Light Bites</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Menu List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="card p-0 overflow-hidden flex flex-col">
                        <div className="relative h-48">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x300?text=No+Image')}
                            />
                            {item.isSignature && (
                                <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                    Signature
                                </span>
                            )}
                            {!item.isAvailable && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="bg-red-600 text-white px-3 py-1 rounded font-bold">SOLD OUT</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                <span className="font-bold text-primary-600">
                                    Rp {item.price.toLocaleString('id-ID')}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4 flex-1">{item.description.id}</p>

                            <div className="flex justify-between items-center pt-4 border-t mt-auto">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setShowModal(true);
                                        }}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
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
                                {selectedItem ? 'Edit Menu Item' : 'Add New Item'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg"
                                    >
                                        <option value="mains">Mains</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="bites">Light Bites</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-900">Descriptions</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Indonesian</label>
                                    <textarea
                                        name="description.id"
                                        value={formData.description?.id}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">English</label>
                                    <textarea
                                        name="description.en"
                                        value={formData.description?.en}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isSignature"
                                        checked={formData.isSignature}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 rounded"
                                    />
                                    <span className="text-gray-700">Signature Dish</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isAvailable"
                                        checked={formData.isAvailable}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 rounded"
                                    />
                                    <span className="text-gray-700">Available</span>
                                </label>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                                    <Save size={20} /> Save Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuPage;
