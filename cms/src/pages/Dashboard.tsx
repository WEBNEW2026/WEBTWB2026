import React, { useEffect, useState } from 'react';
import {
    TrendingUp,
    Building2,
    Calendar,
    Star,
    DollarSign,
    Users,
    ArrowUp,
    ArrowDown,
} from 'lucide-react';
import { dataService } from '../services/dataService';
import { DashboardStats } from '../types';

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            const villas = await dataService.getVillas();
            const bookings = await dataService.getBookings();
            const reviews = await dataService.getReviews();

            const activeBookings = bookings.filter(b => b.status === 'confirmed').length;
            const pendingReviews = reviews.filter(r => r.status === 'pending').length;

            setStats({
                totalVillas: villas.length,
                activeBookings,
                pendingReviews,
                revenue: 0, // Calculate from bookings
                occupancyRate: 75, // Calculate based on bookings
                monthlyBookings: [],
                popularVillas: [],
            });
        } catch (error) {
            console.error('Failed to load dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        {
            title: 'Total Villas',
            value: stats?.totalVillas || 0,
            icon: Building2,
            color: 'from-blue-500 to-blue-600',
            change: '+12%',
            isPositive: true,
        },
        {
            title: 'Active Bookings',
            value: stats?.activeBookings || 0,
            icon: Calendar,
            color: 'from-green-500 to-green-600',
            change: '+23%',
            isPositive: true,
        },
        {
            title: 'Pending Reviews',
            value: stats?.pendingReviews || 0,
            icon: Star,
            color: 'from-yellow-500 to-yellow-600',
            change: '-5%',
            isPositive: false,
        },
        {
            title: 'Occupancy Rate',
            value: `${stats?.occupancyRate || 0}%`,
            icon: Users,
            color: 'from-purple-500 to-purple-600',
            change: '+8%',
            isPositive: true,
        },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">
                    Welcome back! Here's what's happening with your resort.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="stat-card group hover:scale-105 transition-transform duration-200"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                                >
                                    <Icon size={24} />
                                </div>
                                <div
                                    className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    {stat.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                                    {stat.change}
                                </div>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="card">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Calendar size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">New Booking Received</p>
                                <p className="text-sm text-gray-600">Forest House - 3 nights</p>
                                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <Star size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">New Review Submitted</p>
                                <p className="text-sm text-gray-600">5 stars - Villa Gordes</p>
                                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                <Building2 size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">Villa Updated</p>
                                <p className="text-sm text-gray-600">Mooi Lake House pricing changed</p>
                                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Villas */}
                <div className="card">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Villas</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'Forest House', bookings: 45, color: 'bg-green-500' },
                            { name: 'Mooi Lake House', bookings: 38, color: 'bg-blue-500' },
                            { name: 'Olinda Villa', bookings: 32, color: 'bg-purple-500' },
                            { name: 'Villa Hana', bookings: 28, color: 'bg-pink-500' },
                        ].map((villa, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900">{villa.name}</span>
                                    <span className="text-sm text-gray-600">{villa.bookings} bookings</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`${villa.color} h-2 rounded-full transition-all duration-500`}
                                        style={{ width: `${(villa.bookings / 45) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="btn-primary text-left p-6 rounded-xl">
                    <Building2 className="mb-2" size={24} />
                    <h3 className="font-semibold">Add New Villa</h3>
                    <p className="text-sm opacity-90 mt-1">Create a new villa listing</p>
                </button>
                <button className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:shadow-lg transition-all">
                    <Calendar className="mb-2" size={24} />
                    <h3 className="font-semibold">View Bookings</h3>
                    <p className="text-sm opacity-90 mt-1">Manage reservations</p>
                </button>
                <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:shadow-lg transition-all">
                    <Star className="mb-2" size={24} />
                    <h3 className="font-semibold">Review Reviews</h3>
                    <p className="text-sm opacity-90 mt-1">Moderate customer feedback</p>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
