// Core types for CMS
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'editor';
    avatar?: string;
}

export interface Villa {
    id: string;
    name: string;
    cluster: string;
    capacity: string;
    bedrooms: number;
    toilets: number;
    price: number;
    priceWeekday: number;
    priceWeekend: number;
    priceHighSeason: number;
    category: 'luxury' | 'couple' | 'log_home';
    features: string[];
    image: string;
    badge?: string;
    bedConfiguration?: {
        room: number;
        beds: string;
    }[];
    facilities?: {
        room?: string[];
        amenities?: string[];
        meals?: string[];
        natural?: string[];
    };
    policies?: {
        checkIn: string;
        checkOut: string;
        smokeFree: boolean;
        specialNotes?: string[];
    };
    description: {
        id: string;
        en: string;
        zh: string;
    };
    longDescription?: {
        id: string;
        en: string;
        zh: string;
    };
    status: 'active' | 'inactive' | 'maintenance';
    createdAt: string;
    updatedAt: string;
}

export interface Package {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    includes: string[];
    originalPrice?: number;
    price: number;
    unit: string;
    image: string;
    isFeatured?: boolean;
    savings?: string;
    type: 'romantic' | 'family' | 'corporate' | 'wellness';
    status: 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    tags: string[];
    status: 'draft' | 'published' | 'scheduled';
    publishDate: string;
    createdAt: string;
    updatedAt: string;
}

export interface GalleryImage {
    id: string;
    url: string;
    title: string;
    description?: string;
    category: string;
    tags: string[];
    uploadedAt: string;
    size: number;
    dimensions: {
        width: number;
        height: number;
    };
}

export interface Review {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
    avatar: string;
    verified: boolean;
    platform?: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: {
        id: string;
        en: string;
        zh: string;
    };
    price: number;
    image: string;
    category: 'mains' | 'beverages' | 'bites' | 'sides' | 'starters' | 'desserts';
    isSignature?: boolean;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface FAQ {
    id: string;
    question: {
        id: string;
        en: string;
        zh: string;
    };
    answer: {
        id: string;
        en: string;
        zh: string;
    };
    category: string;
    order: number;
    status: 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
}

export interface Booking {
    id: string;
    type: 'villa' | 'package';
    itemId: string;
    itemName: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    guests: number;
    checkIn: string;
    checkOut: string;
    specialRequest?: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    totalPrice?: number;
    createdAt: string;
    updatedAt: string;
}

export interface DashboardStats {
    totalVillas: number;
    activeBookings: number;
    pendingReviews: number;
    revenue: number;
    occupancyRate: number;
    monthlyBookings: {
        month: string;
        count: number;
    }[];
    popularVillas: {
        name: string;
        bookings: number;
    }[];
}

export interface CMSSettings {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    contactPhone: string;
    whatsappNumber: string;
    socialMedia: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
    };
    booking: {
        maxAdvanceDays: number;
        minStayNights: number;
        checkInTime: string;
        checkOutTime: string;
    };
}
