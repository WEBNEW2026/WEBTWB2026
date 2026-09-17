const API_URL = 'http://localhost:3000/api';

export const api = {
    getVillas: async () => {
        const response = await fetch(`${API_URL}/villas`);
        if (!response.ok) throw new Error('Failed to fetch villas');
        return response.json();
    },

    getPackages: async () => {
        const response = await fetch(`${API_URL}/packages`);
        if (!response.ok) throw new Error('Failed to fetch packages');
        return response.json();
    },

    getBlogPosts: async () => {
        const response = await fetch(`${API_URL}/blog`);
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        return response.json();
    }
};
