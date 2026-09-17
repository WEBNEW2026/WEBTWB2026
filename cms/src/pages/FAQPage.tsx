import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, X, Save, HelpCircle } from 'lucide-react';
import { dataService } from '../services/dataService';
import { FAQ } from '../types';

const FAQPage: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState<FAQ | undefined>(undefined);

    // Form state
    const [formData, setFormData] = useState<Partial<FAQ>>({
        question: { id: '', en: '', zh: '' },
        answer: { id: '', en: '', zh: '' },
        category: 'General',
        order: 0,
        status: 'active'
    });

    useEffect(() => {
        loadFAQs();
    }, []);

    useEffect(() => {
        if (selectedFAQ) {
            setFormData(selectedFAQ);
        } else {
            setFormData({
                question: { id: '', en: '', zh: '' },
                answer: { id: '', en: '', zh: '' },
                category: 'General',
                order: faqs.length + 1,
                status: 'active'
            });
        }
    }, [selectedFAQ, showModal]);

    const loadFAQs = async () => {
        try {
            const data = await dataService.getFAQs();
            setFaqs(data);
        } catch (error) {
            console.error('Failed to load FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this FAQ?')) return;
        try {
            await dataService.deleteFAQ(id);
            await loadFAQs();
        } catch (error) {
            console.error('Failed to delete FAQ:', error);
            alert('Failed to delete FAQ');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (selectedFAQ) {
                await dataService.updateFAQ(selectedFAQ.id, formData);
            } else {
                await dataService.createFAQ(formData as Omit<FAQ, 'id' | 'createdAt' | 'updatedAt'>);
            }
            await loadFAQs();
            setShowModal(false);
            setSelectedFAQ(undefined);
        } catch (error) {
            console.error('Failed to save FAQ:', error);
            alert('Failed to save FAQ');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent as keyof FAQ] as any,
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

    const filteredFAQs = faqs.filter(faq =>
        faq.question.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.question.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
                    <p className="text-gray-600 mt-2">Manage frequently asked questions</p>
                </div>
                <button
                    onClick={() => {
                        setSelectedFAQ(undefined);
                        setShowModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add New FAQ
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10"
                    />
                </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
                {filteredFAQs.map(faq => (
                    <div key={faq.id} className="card p-4">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                        {faq.category}
                                    </span>
                                    <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${faq.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {faq.status}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">{faq.question.id}</h3>
                                <p className="text-gray-600 mb-2">{faq.answer.id}</p>
                                <div className="text-sm text-gray-500 border-t pt-2 mt-2">
                                    <p><span className="font-medium">EN:</span> {faq.question.en}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <button
                                    onClick={() => {
                                        setSelectedFAQ(faq);
                                        setShowModal(true);
                                    }}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(faq.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                    <Trash2 size={18} />
                                </button>
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
                                {selectedFAQ ? 'Edit FAQ' : 'Add New FAQ'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg"
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-900 border-b pb-2">Indonesian</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                                    <input
                                        type="text"
                                        name="question.id"
                                        value={formData.question?.id}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                                    <textarea
                                        name="answer.id"
                                        value={formData.answer?.id}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-900 border-b pb-2">English</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                                    <input
                                        type="text"
                                        name="question.en"
                                        value={formData.question?.en}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                                    <textarea
                                        name="answer.en"
                                        value={formData.answer?.en}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                                    <Save size={20} /> Save FAQ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQPage;
