import { useEffect } from 'react';

export interface SEOConfig {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    canonical?: string;
    noindex?: boolean;
}

/**
 * Custom hook for managing SEO meta tags dynamically
 * Usage: useSEO({ title: 'Page Title', description: 'Page description' })
 */
export const useSEO = (config: SEOConfig) => {
    useEffect(() => {
        // Set document title
        if (config.title) {
            document.title = config.title;
        }

        // Helper to update or create meta tag
        const setMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Basic meta tags
        if (config.description) {
            setMetaTag('description', config.description);
        }
        if (config.keywords) {
            setMetaTag('keywords', config.keywords);
        }

        // Open Graph tags
        if (config.ogTitle || config.title) {
            setMetaTag('og:title', config.ogTitle || config.title || '', true);
        }
        if (config.ogDescription || config.description) {
            setMetaTag('og:description', config.ogDescription || config.description || '', true);
        }
        if (config.ogImage) {
            setMetaTag('og:image', config.ogImage, true);
        }
        if (config.ogUrl) {
            setMetaTag('og:url', config.ogUrl, true);
        }
        setMetaTag('og:type', 'website', true);

        // Twitter Card tags
        setMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
        if (config.ogTitle || config.title) {
            setMetaTag('twitter:title', config.ogTitle || config.title || '');
        }
        if (config.ogDescription || config.description) {
            setMetaTag('twitter:description', config.ogDescription || config.description || '');
        }
        if (config.ogImage) {
            setMetaTag('twitter:image', config.ogImage);
        }

        // Canonical URL
        if (config.canonical) {
            let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!linkElement) {
                linkElement = document.createElement('link');
                linkElement.setAttribute('rel', 'canonical');
                document.head.appendChild(linkElement);
            }
            linkElement.setAttribute('href', config.canonical);
        }

        // Robots meta tag
        if (config.noindex) {
            setMetaTag('robots', 'noindex, nofollow');
        } else {
            // Remove noindex if it exists
            const robotsTag = document.querySelector('meta[name="robots"]');
            if (robotsTag && robotsTag.getAttribute('content') === 'noindex, nofollow') {
                robotsTag.remove();
            }
        }
    }, [config]);
};
