import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash, Upload, Loader } from 'lucide-react';
import { Villa } from '../../types';
import { dataService } from '../../services/dataService';

interface VillaFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (villa: Omit<Villa, 'id' | 'createdAt' | 'updatedAt'> | Villa) => void;
    initialData?: Villa;
}

const VillaFormModal: React.FC<VillaFormModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState<Partial<Villa>>({
        name: '',
        cluster: '',
        capacity: '',
        bedrooms: 1,
        toilets: 1,
        price: 0,
        priceWeekday: 0,
        priceWeekend: 0,
        priceHighSeason: 0,
        category: 'luxury',
        features: [],
        image: '',
        status: 'active',
        description: {
            id: '',
            en: '',
            zh: ''
        }
    });

    const [featureInput, setFeatureInput] = useState('');
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            // Reset form for new villa
            setFormData({
                name: '',
                cluster: '',
                capacity: '',
                bedrooms: 1,
                toilets: 1,
                price: 0,
                priceWeekday: 0,
                priceWeekend: 0,
                priceHighSeason: 0,
                category: 'luxury',
                features: [],
                image: '',
                status: 'active',
                description: {
                    id: '',
                    en: '',
                    zh: ''
                }
            });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent as keyof Villa] as any,
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
        }
    };

    const handleAddFeature = () => {
        if (featureInput.trim()) {
            setFormData(prev => ({
                ...prev,
                features: [...(prev.features || []), featureInput.trim()]
            }));
            setFeatureInput('');
        }
    };

    const handleRemoveFeature = (index: number) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features?.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Villa);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-900">
                        {initialData ? 'Edit Villa' : 'Add New Villa'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Villa Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cluster</label>
                            <input
                                type="text"
                                name="cluster"
                                value={formData.cluster}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                            <input
                                type="text"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                placeholder="e.g. 4-6 orang"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="luxury">Luxury</option>
                                <option value="couple">Couple</option>
                                <option value="log_home">Log Home</option>
                            </select>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                            <input
                                type="number"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                min="1"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Toilets</label>
                            <input
                                type="number"
                                name="toilets"
                                value={formData.toilets}
                                onChange={handleChange}
                                min="1"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="active">Active</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-4">Pricing (IDR)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Weekday</label>
                                <input
                                    type="number"
                                    name="priceWeekday"
                                    value={formData.priceWeekday}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Weekend</label>
                                <input
                                    type="number"
                                    name="priceWeekend"
                                    value={formData.priceWeekend}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">High Season</label>
                                <input
                                    type="number"
                                    name="priceHighSeason"
                                    value={formData.priceHighSeason}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Villa Image</label>
                        <div className="flex items-center gap-4 mb-2">
                            <label className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                                <Upload size={20} className="text-gray-500" />
                                <span className="text-sm text-gray-600">Choose Image</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setUploading(true);
                                            try {
                                                const url = await dataService.uploadImage(file);
                                                setFormData(prev => ({ ...prev, image: url }));
                                            } catch (error) {
                                                console.error('Upload failed:', error);
                                                alert('Failed to upload image');
                                            } finally {
                                                setUploading(false);
                                            }
                                        }
                                    }}
                                />
                            </label>
                            {uploading && <Loader className="animate-spin text-blue-600" size={20} />}
                        </div>

                        {formData.image && (
                            <div className="relative mt-2">
                                <img
                                    src={formData.image}
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded-lg border"
                                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL')}
                                />
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={featureInput}
                                onChange={(e) => setFeatureInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                                placeholder="Add a feature..."
                                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={handleAddFeature}
                                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.features?.map((feature, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    {feature}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFeature(index)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Descriptions</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Indonesian</label>
                            <textarea
                                name="description.id"
                                value={formData.description?.id}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">English</label>
                            <textarea
                                name="description.en"
                                value={formData.description?.en}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Chinese</label>
                            <textarea
                                name="description.zh"
                                value={formData.description?.zh}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                            <Save size={20} />
                            Save Villa
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VillaFormModal;
