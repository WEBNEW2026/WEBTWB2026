import React from 'react';
import { useSEO, SEOConfig } from '../../hooks/useSEO';

interface SEOHeadProps extends SEOConfig {
    children?: React.ReactNode;
}

/**
 * SEO Head Component - Declarative SEO meta tags
 * 
 * Usage:
 * <SEOHead 
 *   title="Page Title | Taman Wisata Bougenville"
 *   description="Page description for SEO"
 *   ogImage="https://example.com/image.jpg"
 * />
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ children, ...config }) => {
    useSEO(config);

    return <>{children}</>;
};
