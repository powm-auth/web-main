import React, { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    disableGate?: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, disableGate = false }) => {
    // "Render Gate" Strategy
    // We strictly withhold rendering the children until we confirm the scroll is at 0.
    const [canRender, setCanRender] = useState(disableGate);

    useLayoutEffect(() => {
        if (disableGate) return;

        // 1. Force Reset
        const resetScroll = () => {
            window.scrollTo(0, 0);
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;
        };

        resetScroll();

        // 2. Loop until confirmed
        const checkScroll = () => {
            if (window.scrollY <= 2) {
                // Safe to render!
                setCanRender(true);
            } else {
                // Not safe, try again
                resetScroll();
                requestAnimationFrame(checkScroll);
            }
        };

        requestAnimationFrame(checkScroll);

        // Safety: ensure render after 100ms
        const timer = setTimeout(() => setCanRender(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Placeholder while waiting (avoids white flash by inheriting bg if possible, or just implicit transparent)
    // minHeight ensures no layout collapse.
    if (!canRender) {
        return <div style={{ minHeight: '100vh', width: '100%', opacity: 0 }} />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};
