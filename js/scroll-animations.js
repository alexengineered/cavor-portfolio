/**
 * Scroll Animation Controller
 * Handles fade-in animations for resume sections as they enter the viewport
 */

(function() {
    'use strict';

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Callback function for Intersection Observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger CSS animation
                entry.target.classList.add('visible');

                // Optional: Stop observing after animation triggers (one-time animation)
                observer.unobserve(entry.target);
            }
        });
    }

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Initialize scroll animations when DOM is ready
    function initScrollAnimations() {
        // Select all sections that should animate on scroll
        const sections = document.querySelectorAll('[data-scroll-section]');

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }

})();