import React, { useEffect, useState } from 'react';
import { Star, Search, Filter, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Review } from '../types';

const ReviewsPage: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            const data = await dataService.getReviews();
            setReviews(data);
        } catch (error) {
            console.error('Failed to load reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, status: Review['status']) => {
        try {
            await dataService.updateReviewStatus(id, status);
            await loadReviews();
        } catch (error) {
            console.error('Failed to update review:', error);
            alert('Failed to update review status');
        }
    };

    const filteredReviews = reviews.filter((review) => {
        const matchesSearch =
            review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.text.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: Review['status']) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-700';
            case 'approved':
                return 'bg-green-100 text-green-700';
            case 'rejected':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={16}
                        className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                ))}
            </div>
        );
    };

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
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Reviews Management</h1>
                <p className="text-gray-600 mt-2">Moderate and manage customer reviews</p>
            </div>

            {/* Filters */}
            <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search reviews..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input-field pl-10"
                        />
                    </div>
                    <div className="relative">
                        <Filter
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="input-field pl-10"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Total Reviews</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{reviews.length}</p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">
                        {reviews.filter((r) => r.status === 'pending').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Approved</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        {reviews.filter((r) => r.status === 'approved').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Average Rating</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {reviews.length > 0
                            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
                            : '0.0'}
                    </p>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 gap-4">
                {filteredReviews.length === 0 ? (
                    <div className="card text-center py-12">
                        <p className="text-gray-500">No reviews found</p>
                    </div>
                ) : (
                    filteredReviews.map((review) => (
                        <div key={review.id} className="card hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-4 flex-1">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-semibold text-gray-900">{review.name}</h3>
                                            {review.verified && (
                                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                                    Verified
                                                </span>
                                            )}
                                            <span
                                                className={`px-2 py-0.5 text-xs font-medium rounded ${getStatusColor(
                                                    review.status
                                                )}`}
                                            >
                                                {review.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            {renderStars(review.rating)}
                                            <span className="text-sm text-gray-500">{review.location}</span>
                                            {review.platform && (
                                                <span className="text-sm text-gray-500">• {review.platform}</span>
                                            )}
                                        </div>
                                        <p className="text-gray-700 mb-2">{review.text}</p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(review.date).toLocaleDateString('id-ID', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                {review.status === 'pending' && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleStatusUpdate(review.id, 'approved')}
                                            className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors"
                                            title="Approve"
                                        >
                                            <CheckCircle size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleStatusUpdate(review.id, 'rejected')}
                                            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                                            title="Reject"
                                        >
                                            <XCircle size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReviewsPage;
