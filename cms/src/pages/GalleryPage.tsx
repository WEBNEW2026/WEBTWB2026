import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Search, X, Save, Image as ImageIcon } from 'lucide-react';
import { dataService } from '../services/dataService';
import { GalleryImage } from '../types';

const GalleryPage: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Form state
    const [formData, setFormData] = useState<Partial<GalleryImage>>({
        title: '',
        url: '',
        category: 'General',
        tags: [],
        description: ''
    });
    const [tagInput, setTagInput] = useState('');

    useEffect(() => {
        // Mock data for gallery since it's not in dataService yet
        // In real implementation, add getGalleryImages to dataService
        const mockImages: GalleryImage[] = [
            {
                id: '1',
                url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600',
                title: 'Forest View',
                category: 'Landscape',
                tags: ['forest', 'nature'],
                uploadedAt: new Date().toISOString(),
                size: 1024,
                dimensions: { width: 1600, height: 900 }
            },
            {
                id: '2',
                url: 'https://images.unsplash.com/photo-1505577058444-a3dab90d8780?q=80&w=1600',
                title: 'Lake House',
                category: 'Architecture',
                tags: ['lake', 'house'],
                uploadedAt: new Date().toISOString(),
                size: 2048,
                dimensions: { width: 1600, height: 900 }
            }
        ];
        setImages(mockImages);
        setLoading(false);
    }, []);

    const handleDelete = (id: string) => {
        if (!confirm('Are you sure you want to delete this image?')) return;
        setImages(prev => prev.filter(img => img.id !== id));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const newImage: GalleryImage = {
            ...formData as GalleryImage,
            id: Date.now().toString(),
            uploadedAt: new Date().toISOString(),
            size: 0,
            dimensions: { width: 0, height: 0 }
        };
        setImages(prev => [newImage, ...prev]);
        setShowModal(false);
        setFormData({
            title: '',
            url: '',
            category: 'General',
            tags: [],
            description: ''
        });
    };

    const handleAddTag = () => {
        if (tagInput.trim()) {
            setFormData(prev => ({
                ...prev,
                tags: [...(prev.tags || []), tagInput.trim()]
            }));
            setTagInput('');
        }
    };

    const handleRemoveTag = (index: number) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags?.filter((_, i) => i !== index)
        }));
    };

    const filteredImages = images.filter(img =>
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
                    <p className="text-gray-600 mt-2">Manage website images and media</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New Image
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search images..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10"
                    />
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map(img => (
                    <div key={img.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                        <div className="aspect-square relative bg-gray-100">
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover"
                                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Invalid+Image')}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <button
                                    onClick={() => handleDelete(img.id)}
                                    className="p-2 bg-white text-red-600 rounded-full hover:bg-red-50"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="font-medium text-gray-900 truncate">{img.title}</h3>
                            <p className="text-sm text-gray-500">{img.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">Add New Image</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="text"
                                    value={formData.url}
                                    onChange={e => setFormData({ ...formData, url: e.target.value })}
                                    required
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="https://..."
                                />
                            </div>

                            {formData.url && (
                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src={formData.url}
                                        alt="Preview"
                                        className="w-full h-full object-contain"
                                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL')}
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <input
                                    type="text"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                                <div className="flex gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={e => setTagInput(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                        className="flex-1 p-2 border rounded-lg"
                                        placeholder="Add tag..."
                                    />
                                    <button type="button" onClick={handleAddTag} className="bg-blue-600 text-white p-2 rounded-lg">
                                        <Plus size={20} />
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.tags?.map((tag, i) => (
                                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            {tag}
                                            <button type="button" onClick={() => handleRemoveTag(i)}><X size={14} /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                                    <Save size={20} /> Save Image
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
