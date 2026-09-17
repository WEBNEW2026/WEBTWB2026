/**
 * Optimizes image URLs for performance.
 * Currently supports Unsplash URLs by appending format and quality parameters.
 * 
 * @param url The source image URL
 * @param width Optional target width for resizing
 * @param quality Quality setting (1-100), default 80
 * @returns The optimized image URL
 */
export function optimizeImage(url: string, width?: number, quality: number = 80): string {
    if (!url) return '';

    // Check if it's an Unsplash URL
    if (url.includes('images.unsplash.com')) {
        const separator = url.includes('?') ? '&' : '?';
        let params = `fm=webp&q=${quality}`;

        if (width) {
            params += `&w=${width}`;
        }

        // If URL already has these params, we might want to replace them, 
        // but for simplicity, appending usually overrides or works with Unsplash API 
        // (though ideally we should parse existing params).
        // A safer approach is to use URL object.

        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('fm', 'webp');
            urlObj.searchParams.set('q', quality.toString());
            if (width) {
                urlObj.searchParams.set('w', width.toString());
            }
            return urlObj.toString();
        } catch (e) {
            // Fallback for invalid URLs
            return `${url}${separator}${params}`;
        }
    }

    return url;
}
