/**
 * Utility functions for checking font loading status
 */

/**
 * List of all font families used in the application
 */
const FONT_FAMILIES = [
    'Montserrat',
    'Chelsea Market',
    'inter',
    'bungee',
    'main',
    'zing',
    'plasma',
    'DynaPuff',
];

/**
 * Checks if all fonts are loaded and ready
 * @returns Promise that resolves when all fonts are loaded
 */
export async function waitForFonts(): Promise<void> {
    // Check if Font Loading API is available
    if (!document.fonts || !document.fonts.ready) {
        // Fallback: wait a bit for fonts to load
        await new Promise(resolve => setTimeout(resolve, 1000));
        return;
    }

    try {
        // Wait for all fonts to be loaded
        await document.fonts.ready;
        
        // Double-check that all our fonts are actually loaded
        const fontChecks = FONT_FAMILIES.map(fontFamily => {
            // Check if the font is loaded by testing with different weights/styles
            return document.fonts.check(`12px "${fontFamily}"`) ||
                   document.fonts.check(`12px ${fontFamily}`);
        });
        
        // If any fonts aren't loaded, wait a bit more
        if (!fontChecks.every(check => check)) {
            // Wait for fonts to load with a timeout
            const maxWait = 5000; // 5 seconds max
            const startTime = Date.now();
            
            while (Date.now() - startTime < maxWait) {
                const allLoaded = FONT_FAMILIES.every(fontFamily => {
                    return document.fonts.check(`12px "${fontFamily}"`) ||
                           document.fonts.check(`12px ${fontFamily}`);
                });
                
                if (allLoaded) {
                    return;
                }
                
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    } catch (error) {
        console.warn('Error checking fonts:', error);
        // Fallback: wait a bit for fonts to load
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

/**
 * Preloads an image and returns a promise
 */
export function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to not block loading
        img.src = src;
    });
}

/**
 * Preloads multiple images
 */
export function preloadImages(sources: string[]): Promise<void> {
    return Promise.all(sources.map(src => preloadImage(src))).then(() => {});
}

