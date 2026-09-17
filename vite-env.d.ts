/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GA4_ID: string;
    readonly VITE_FB_PIXEL_ID: string;
    readonly VITE_SITE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
