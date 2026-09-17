import React, { useEffect, useState } from 'react';
import { Calendar, Search, Filter, Eye, CheckCircle, XCircle } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Booking } from '../types';

const BookingsPage: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            const data = await dataService.getBookings();
            setBookings(data);
        } catch (error) {
            console.error('Failed to load bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, status: Booking['status']) => {
        try {
            await dataService.updateBookingStatus(id, status);
            await loadBookings();
        } catch (error) {
            console.error('Failed to update booking:', error);
            alert('Failed to update booking status');
        }
    };

    const filteredBookings = bookings.filter((booking) => {
        const matchesSearch =
            booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.guestEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.itemName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: Booking['status']) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-700';
            case 'confirmed':
                return 'bg-green-100 text-green-700';
            case 'cancelled':
                return 'bg-red-100 text-red-700';
            case 'completed':
                return 'bg-blue-100 text-blue-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
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
                <h1 className="text-3xl font-bold text-gray-900">Bookings Management</h1>
                <p className="text-gray-600 mt-2">View and manage all reservations</p>
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
                            placeholder="Search bookings..."
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
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{bookings.length}</p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">
                        {bookings.filter((b) => b.status === 'pending').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Confirmed</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        {bookings.filter((b) => b.status === 'confirmed').length}
                    </p>
                </div>
                <div className="stat-card">
                    <p className="text-gray-600 text-sm">Completed</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {bookings.filter((b) => b.status === 'completed').length}
                    </p>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Guest</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Item</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dates</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Guests</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredBookings.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No bookings found
                                    </td>
                                </tr>
                            ) : (
                                filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-gray-900">{booking.guestName}</p>
                                                <p className="text-sm text-gray-600">{booking.guestEmail}</p>
                                                <p className="text-sm text-gray-600">{booking.guestPhone}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">{booking.itemName}</p>
                                                <span className="text-xs text-gray-500">{booking.type}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm">
                                                <p className="text-gray-900">
                                                    {new Date(booking.checkIn).toLocaleDateString('id-ID')}
                                                </p>
                                                <p className="text-gray-500">to</p>
                                                <p className="text-gray-900">
                                                    {new Date(booking.checkOut).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">{booking.guests} pax</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                    booking.status
                                                )}`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {booking.status === 'pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                                                            className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors"
                                                            title="Confirm"
                                                        >
                                                            <CheckCircle size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                                                            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                                                            title="Cancel"
                                                        >
                                                            <XCircle size={18} />
                                                        </button>
                                                    </>
                                                )}
                                                {booking.status === 'confirmed' && (
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking.id, 'completed')}
                                                        className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                                                        title="Mark as Completed"
                                                    >
                                                        <CheckCircle size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingsPage;
