import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Taman Wisata Bougenville - Exclusive Mountain Escape in Bandung",
    canonical,
    image = "https://tamanwisatabougenville.com/og-image.jpg",
    type = "website",
    schema
}) => {
    const siteTitle = "Taman Wisata Bougenville";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const currentUrl = window.location.href;
    const canonicalUrl = canonical || currentUrl.split('?')[0];

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Helper to update meta tags
        const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper to update link tags (canonical)
        const updateLink = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Update Meta Tags
        updateMeta('description', description);

        // Open Graph
        updateMeta('og:title', fullTitle, 'property');
        updateMeta('og:description', description, 'property');
        updateMeta('og:url', canonicalUrl, 'property');
        updateMeta('og:type', type, 'property');
        updateMeta('og:image', image, 'property');
        updateMeta('og:site_name', siteTitle, 'property');

        // Twitter Card
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', image);

        // Canonical
        updateLink('canonical', canonicalUrl);

        // Schema.org Structured Data
        if (schema) {
            let script = document.querySelector('#schema-json-ld');
            if (!script) {
                script = document.createElement('script');
                script.id = 'schema-json-ld';
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema);
        }

        // Cleanup function not strictly necessary for single page app transitions 
        // where we always want to replace, but good practice if we were unmounting
    }, [fullTitle, description, canonicalUrl, image, type, schema]);

    return null;
};
