// Script untuk populate initial data dari main website ke CMS
import { dataService } from '../services/dataService';

// Sample data dari main website
const initialVillas = [
    {
        id: 'forest-house-1',
        name: 'Forest House',
        cluster: 'Forest House Puntang',
        capacity: '13-16 orang',
        bedrooms: 5,
        toilets: 4,
        price: 25000000,
        priceWeekday: 25000000,
        priceWeekend: 30000000,
        priceHighSeason: 35000000,
        category: 'luxury' as const,
        badge: 'Most Exclusive',
        features: ['Private Waterfall', 'Garden & Pond', 'Gazebo', 'Full Board Meals', 'Premium Service'],
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600',
        status: 'active' as const,
        description: {
            id: 'Villa privat super mewah dengan pemandangan hutan langsung. Kapasitas 13-16 orang dengan fasilitas air terjun & taman privat.',
            en: 'Super luxurious private villa with direct forest views. Capacity for 13-16 people with private waterfall & garden facilities.',
            zh: '超豪华私人别墅，可直接欣赏森林美景。 可容纳13-16人，配有私人瀑布和花园设施。'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'mooi-lake-1',
        name: 'Mooi Lake House',
        cluster: 'Mooi Lake House Puntang',
        capacity: '9 orang',
        bedrooms: 3,
        toilets: 2,
        price: 12500000,
        priceWeekday: 12500000,
        priceWeekend: 15000000,
        priceHighSeason: 17500000,
        category: 'luxury' as const,
        badge: 'Lakeside Living',
        features: ['Private Lake & Boat', 'Full Board Meals', 'Lakeside Terrace'],
        image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d8780?q=80&w=1600',
        status: 'active' as const,
        description: {
            id: 'Villa mewah privat dengan pemandangan danau langsung. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap.',
            en: 'Luxurious private villa with direct lake views. Capacity for 9 people, includes complete stay facilities.',
            zh: '豪华私人别墅，可直接欣赏湖景。 可容纳9人，包括完整的住宿设施。'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const initialBookings = [
    {
        id: 'booking-001',
        type: 'villa' as const,
        itemId: 'forest-house-1',
        itemName: 'Forest House',
        guestName: 'John Doe',
        guestEmail: 'john.doe@example.com',
        guestPhone: '+62812345678',
        guests: 14,
        checkIn: '2025-12-15',
        checkOut: '2025-12-18',
        specialRequest: 'Anniversary celebration, need flower decoration',
        status: 'pending' as const,
        totalPrice: 90000000,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'booking-002',
        type: 'villa' as const,
        itemId: 'mooi-lake-1',
        itemName: 'Mooi Lake House',
        guestName: 'Jane Smith',
        guestEmail: 'jane.smith@example.com',
        guestPhone: '+62823456789',
        guests: 7,
        checkIn: '2025-12-20',
        checkOut: '2025-12-22',
        status: 'confirmed' as const,
        totalPrice: 30000000,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    },
];

const initialReviews = [
    {
        id: 'review-001',
        name: 'Sarah Johnson',
        location: 'Jakarta, Indonesia',
        rating: 5,
        text: 'Amazing experience! The Forest House exceeded all our expectations. The private waterfall was magical!',
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        avatar: 'https://i.pravatar.cc/150?img=1',
        verified: true,
        platform: 'Google Reviews',
        status: 'pending' as const,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'review-002',
        name: 'Michael Chen',
        location: 'Singapore',
        rating: 5,
        text: 'Perfect getaway from the city. The lake house is beautiful and very peaceful. Staff were extremely helpful.',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        avatar: 'https://i.pravatar.cc/150?img=2',
        verified: true,
        platform: 'TripAdvisor',
        status: 'approved' as const,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
];

// Function to populate data
export const populateInitialData = () => {
    console.log('🌱 Populating initial data...');

    // Save villas
    localStorage.setItem('cms_villas', JSON.stringify(initialVillas));
    console.log(`✅ Added ${initialVillas.length} villas`);

    // Save bookings
    localStorage.setItem('cms_bookings', JSON.stringify(initialBookings));
    console.log(`✅ Added ${initialBookings.length} bookings`);

    // Save reviews
    localStorage.setItem('cms_reviews', JSON.stringify(initialReviews));
    console.log(`✅ Added ${initialReviews.length} reviews`);

    // Save default settings
    const defaultSettings = {
        siteName: 'Taman Wisata Bougenville',
        siteDescription: 'Luxury Mountain Resort in Puntang',
        contactEmail: 'info@bougenville.com',
        contactPhone: '+62 123 4567 8900',
        whatsappNumber: '62123456789',
        socialMedia: {
            facebook: 'https://facebook.com/bougenville',
            instagram: 'https://instagram.com/bougenville',
            twitter: 'https://twitter.com/bougenville',
        },
        booking: {
            maxAdvanceDays: 365,
            minStayNights: 1,
            checkInTime: '15:00',
            checkOutTime: '12:00',
        },
    };
    localStorage.setItem('cms_settings', JSON.stringify(defaultSettings));
    console.log('✅ Settings configured');

    console.log('🎉 Initial data populated successfully!');
    console.log('📊 Summary:');
    console.log(`   - Villas: ${initialVillas.length}`);
    console.log(`   - Bookings: ${initialBookings.length}`);
    console.log(`   - Reviews: ${initialReviews.length}`);

    return true;
};

// Auto-run if data doesn't exist
export const checkAndPopulateData = () => {
    const existingVillas = localStorage.getItem('cms_villas');

    if (!existingVillas || JSON.parse(existingVillas).length === 0) {
        console.log('📦 No existing data found. Populating initial data...');
        populateInitialData();
        return true;
    }

    console.log('✓ Data already exists');
    return false;
};
