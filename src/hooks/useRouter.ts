import { useState, useEffect, useCallback } from 'react';

type ViewState = 'home' | 'villas' | 'resto' | 'facility' | 'gallery' | 'villa-detail' | 'offers' | 'about' | 'location' | 'contact' | 'faq' | 'blog';

export function useRoute(initialView: ViewState = 'home') {
    const [view, setView] = useState<ViewState>(initialView);
    const [params, setParams] = useState<Record<string, string>>({});

    // Initialize from URL on mount
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const page = searchParams.get('page') as ViewState;
        const id = searchParams.get('id');

        if (page && isValidView(page)) {
            setView(page);
        }
        if (id) {
            setParams(prev => ({ ...prev, id }));
        }
    }, []);

    // Update URL when view changes
    const navigate = useCallback((newView: ViewState, newParams?: Record<string, string>) => {
        setView(newView);
        if (newParams) {
            setParams(newParams);
        }

        const url = new URL(window.location.href);
        url.searchParams.set('page', newView);

        if (newParams?.id) {
            url.searchParams.set('id', newParams.id);
        } else {
            url.searchParams.delete('id');
        }

        window.history.pushState({ view: newView, params: newParams }, '', url.toString());

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Handle back button
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state) {
                setView(event.state.view || 'home');
                setParams(event.state.params || {});
            } else {
                // Fallback to parsing URL if no state (e.g. initial load or external link)
                const searchParams = new URLSearchParams(window.location.search);
                const page = searchParams.get('page') as ViewState;
                if (page && isValidView(page)) {
                    setView(page);
                } else {
                    setView('home');
                }
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    return { view, navigate, params };
}

function isValidView(view: string): view is ViewState {
    const validViews = ['home', 'villas', 'resto', 'facility', 'gallery', 'villa-detail', 'offers', 'about', 'location', 'contact', 'faq', 'blog'];
    return validViews.includes(view);
}
