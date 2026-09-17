import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, X, Save, Calendar, User } from 'lucide-react';
import { dataService } from '../services/dataService';
import { BlogPost } from '../types';
import { useToast } from '../contexts/ToastContext';

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | undefined>(undefined);
    const { showToast } = useToast();

    // Form state
    const [formData, setFormData] = useState<Partial<BlogPost>>({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        coverImage: '',
        category: 'General',
        tags: [],
        status: 'draft',
        author: {
            name: 'Admin',
            avatar: 'https://ui-avatars.com/api/?name=Admin'
        },
        publishDate: new Date().toISOString().split('T')[0]
    });
    const [tagInput, setTagInput] = useState('');

    useEffect(() => {
        loadPosts();
    }, []);

    useEffect(() => {
        if (selectedPost) {
            setFormData({
                ...selectedPost,
                publishDate: selectedPost.publishDate.split('T')[0]
            });
        } else {
            setFormData({
                title: '',
                slug: '',
                excerpt: '',
                content: '',
                coverImage: '',
                category: 'General',
                tags: [],
                status: 'draft',
                author: {
                    name: 'Admin',
                    avatar: 'https://ui-avatars.com/api/?name=Admin'
                },
                publishDate: new Date().toISOString().split('T')[0]
            });
        }
    }, [selectedPost, showModal]);

    const loadPosts = async () => {
        try {
            const data = await dataService.getBlogPosts();
            setPosts(data);
        } catch (error) {
            console.error('Failed to load blog posts:', error);
            showToast('Failed to load blog posts', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        try {
            await dataService.deleteBlogPost(id);
            await loadPosts();
            showToast('Post deleted successfully', 'success');
        } catch (error) {
            console.error('Failed to delete post:', error);
            showToast('Failed to delete post', 'error');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (selectedPost) {
                await dataService.updateBlogPost(selectedPost.id, formData);
                showToast('Post updated successfully', 'success');
            } else {
                await dataService.createBlogPost(formData as Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>);
                showToast('Post created successfully', 'success');
            }
            await loadPosts();
            setShowModal(false);
            setSelectedPost(undefined);
        } catch (error) {
            console.error('Failed to save post:', error);
            showToast('Failed to save post', 'error');
        }
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

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
                    <p className="text-gray-600 mt-2">Manage blog posts and articles</p>
                </div>
                <button
                    onClick={() => {
                        setSelectedPost(undefined);
                        setShowModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={20} />
                    Create New Post
                </button>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10"
                    />
                </div>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {filteredPosts.map(post => (
                    <div key={post.id} className="card p-4 flex gap-4 items-start">
                        <img
                            src={post.coverImage || 'https://via.placeholder.com/150'}
                            alt={post.title}
                            className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                            {post.category}
                                        </span>
                                        <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${post.status === 'published' ? 'bg-green-100 text-green-700' :
                                            post.status === 'scheduled' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">{post.excerpt}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setSelectedPost(post);
                                            setShowModal(true);
                                        }}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <User size={14} />
                                    {post.author.name}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {new Date(post.publishDate).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">
                                {selectedPost ? 'Edit Post' : 'Create New Post'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={e => setFormData({
                                            ...formData,
                                            title: e.target.value,
                                            slug: e.target.value.toLowerCase().replace(/ /g, '-')
                                        })}
                                        required
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                        required
                                        className="w-full p-2 border rounded-lg bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                                <textarea
                                    value={formData.excerpt}
                                    onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                    rows={2}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                <textarea
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    rows={10}
                                    className="w-full p-2 border rounded-lg font-mono text-sm"
                                    placeholder="Write your post content here (Markdown supported)..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Publish Date</label>
                                    <input
                                        type="date"
                                        value={formData.publishDate}
                                        onChange={e => setFormData({ ...formData, publishDate: e.target.value })}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                                <input
                                    type="text"
                                    value={formData.coverImage}
                                    onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                    className="w-full p-2 border rounded-lg"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="scheduled">Scheduled</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                                    <Save size={20} /> Save Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
