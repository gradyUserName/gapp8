import { useState, useEffect } from "react";

const useScrollDirection = ({ initialDirection, thresholdPixels, off }) => {
    const [scrollDir, setScrollDir] = useState(initialDirection);
    const [ticking, setTicking] = useState(false);

    useEffect(() => {
        const threshold = thresholdPixels || 0;
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                setTicking(false);
                return;
            }

            setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY > 0 ? scrollY : 0;
            setTicking(false);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                setTicking(true);
            }
        };

        !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [initialDirection, thresholdPixels, off, ticking]);

    return scrollDir;
};

export default useScrollDirection;