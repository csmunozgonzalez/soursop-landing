/**
 * Custom hook for Soursop OS Analytics
 * Centralizes all event tracking logic to GTM's dataLayer.
 */
export const useAnalytics = () => {
    const trackEvent = (eventName, params = {}) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: eventName,
                ...params,
                timestamp: new Date().toISOString()
            });

            // Console log for development/debug
            if (import.meta.env.DEV) {
                console.log(`[Analytics] Event: ${eventName}`, params);
            }
        }
    };

    return { trackEvent };
};
