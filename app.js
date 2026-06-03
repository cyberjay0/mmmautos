/* ==========================================================================
   MMM Autos Interactivity Script - Luxury Version
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. Preloader & Site Fade-in System
    // ==========================================
    const preloader = document.getElementById('preloader');
    const appWrapper = document.getElementById('app-wrapper');

    if (preloader && appWrapper) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            appWrapper.classList.add('fade-in');
            
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        }, 3500);
    } else {
        if (appWrapper) appWrapper.classList.add('fade-in');
    }


    // ==========================================
    // 1. Adaptive Header Scroll State
    // ==========================================
    const mainHeader = document.getElementById('main-header');
    
    function checkHeaderScroll() {
        if (window.scrollY > 45) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    }

    if (mainHeader) {
        // Run on load in case page was refreshed scrolled
        checkHeaderScroll();
        window.addEventListener('scroll', checkHeaderScroll);
    }


    // ==========================================
    // 2. High-Performance Scroll Reveal & Stagger
    // ==========================================
    // Detection observer looking for scroll entry triggers
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Add staggered transition delays if item is a grid item or list item
                const parent = target.parentNode;
                if (parent) {
                    const isStaggerContainer = 
                        parent.classList.contains('deals-grid') || 
                        parent.classList.contains('inventory-grid') || 
                        parent.classList.contains('why-grid') || 
                        parent.classList.contains('services-container') ||
                        parent.classList.contains('nav-list');
                        
                    if (isStaggerContainer) {
                        const siblings = Array.from(parent.children);
                        const index = siblings.indexOf(target);
                        if (index !== -1) {
                            // Stagger transition-delay by 100ms per index item
                            target.style.transitionDelay = `${index * 0.12}s`;
                        }
                    }
                }
                
                target.classList.add('reveal-active');
                revealObserver.unobserve(target); // Only animate once
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px' // Triggers slightly before entering fully
    });

    // Observe all elements marked for scroll-reveal
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => {
        revealObserver.observe(el);
    });


    // ==========================================
    // 3. Hover-to-Play Video Walkthrough
    // ==========================================
    const hoverCards = document.querySelectorAll('.hover-video-card');

    hoverCards.forEach(card => {
        const image = card.querySelector('.card-image');
        const video = card.querySelector('.card-video');
        const videoSrc = card.getAttribute('data-video');

        if (!video || !videoSrc) return;

        // Mouse Enter - Play Video Walkthrough
        card.addEventListener('mouseenter', () => {
            // Lazy load video source on hover
            if (!video.src) {
                video.src = videoSrc;
                video.load();
            }

            // Transition: Hide image, show video
            image.classList.remove('active');
            video.classList.add('active');

            // Play video with error catch
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay was prevented or video load failed:", error);
                });
            }
        });

        // Mouse Leave - Stop Video & Return to Image
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.classList.remove('active');
            image.classList.add('active');
        });
    });


    // ==========================================
    // 4. Walkthrough Video Modal Player
    // ==========================================
    const videoModal = document.getElementById('video-modal');
    const modalBackdrop = document.getElementById('video-modal-backdrop');
    const modalClose = document.getElementById('video-modal-close');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const modalCarName = document.getElementById('modal-car-name');
    const modalCarType = document.getElementById('modal-car-type');
    const openModalBtns = document.querySelectorAll('.open-walkthrough-btn');

    function openModal(card) {
        const carName = card.querySelector('.car-name').textContent;
        const carStatus = card.querySelector('.car-status').textContent;
        const videoSrc = card.getAttribute('data-video');

        modalCarName.textContent = `${carName} - Full Walkthrough`;
        modalCarType.textContent = carStatus;
        modalVideoPlayer.src = videoSrc;

        videoModal.classList.add('active');
        modalVideoPlayer.play().catch(err => {
            console.log("Modal play was prevented:", err);
        });
    }

    function closeModal() {
        videoModal.classList.remove('active');
        modalVideoPlayer.pause();
        modalVideoPlayer.src = ""; // Clear src to stop bandwidth consumption
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.car-card');
            if (card) openModal(card);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Escape Key to Close Modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });


    // ==========================================
    // 5. Inventory Filtering System
    // ==========================================
    const filterTabsContainer = document.getElementById('filter-tabs');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const inventoryGrid = document.getElementById('inventory-grid-container');
    
    if (filterTabsContainer && inventoryGrid) {
        const inventoryCards = inventoryGrid.querySelectorAll('.car-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active button class
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter').toLowerCase();

                inventoryCards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category').toLowerCase().split(' ');

                    if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                        card.classList.remove('hide');
                        card.classList.add('fade');
                    } else {
                        card.classList.add('hide');
                        card.classList.remove('fade');
                    }
                });
            });
        });
    }


    // ==========================================
    // 6. Mobile Navigation Menu Toggle
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu when a nav link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
