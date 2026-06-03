/* ==========================================================================
   MMM Autos Interactivity Script - Luxury Version
   ========================================================================== */

import { cars, siteConfig } from './inventory.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Dynamic Render Engine (Hero Wallpaper & Car Cards)
    // ==========================================
    
    // 1. Dynamic Hero Background Image Wallpaper
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && siteConfig && siteConfig.heroImage) {
        heroSection.style.backgroundImage = `url('${siteConfig.heroImage}')`;
    }

    // 2. Dynamic Car Grid Rendering
    const dealsContainer = document.getElementById('deals-grid-container');
    const inventoryContainer = document.getElementById('inventory-grid-container');

    function createCarCardHTML(car, type) {
        const buttonText = type === 'deal' ? 'View Deal' : 'View Details';
        const categoryAttr = car.category ? `data-category="${car.category}"` : '';

        return `
            <div class="car-card hover-video-card reveal" data-id="${car.id}" ${categoryAttr} data-video="${car.video}">
                <div class="card-media-wrapper">
                    <span class="card-tag ${car.tagClass}">${car.tag}</span>
                    <img class="card-image active" src="${car.photo}" alt="${car.name}">
                    <video class="card-video" loop muted playsinline></video>
                    <div class="video-indicator">
                        <svg class="play-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
                        Hover to view walkthrough
                    </div>
                </div>
                <div class="card-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-status">${car.status}</p>
                    <div class="card-footer">
                        <span class="car-price">${car.price}</span>
                        <button class="btn btn-outline-dark btn-sm open-walkthrough-btn">${buttonText}</button>
                    </div>
                </div>
            </div>
        `;
    }

    if (dealsContainer) {
        const dealsHtml = cars
            .filter(car => car.isDeal)
            .map(car => createCarCardHTML(car, 'deal'))
            .join('');
        dealsContainer.innerHTML = dealsHtml;
    }

    if (inventoryContainer) {
        const inventoryHtml = cars
            .filter(car => car.isInventory)
            .map(car => createCarCardHTML(car, 'inventory'))
            .join('');
        inventoryContainer.innerHTML = inventoryHtml;
    }

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

        // Mouse Enter - Play Video Walkthrough (Try unmuted first, fall back to muted if blocked)
        card.addEventListener('mouseenter', () => {
            // Lazy load video source on hover
            if (!video.src) {
                video.src = videoSrc;
                video.load();
            }

            // Transition: Hide image, show video
            image.classList.remove('active');
            video.classList.add('active');

            // Try to play with sound unmuted
            video.muted = false;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Unmuted autoplay was prevented, falling back to muted play:", error);
                    // Fall back to muted play
                    video.muted = true;
                    video.play().catch(err => {
                        console.log("Muted autoplay also failed:", err);
                    });
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
    // 4. Vehicle Details Modal & Carousel Player
    // ==========================================
    const detailsModal = document.getElementById('details-modal');
    const detailsBackdrop = document.getElementById('details-modal-backdrop');
    const detailsClose = document.getElementById('details-modal-close');
    const modalSlidesWrapper = document.getElementById('modal-slides-wrapper');
    const modalCarTag = document.getElementById('modal-car-tag');
    const modalCarName = document.getElementById('modal-car-name');
    const modalCarStatus = document.getElementById('modal-car-status');
    const modalCarPrice = document.getElementById('modal-car-price');
    const modalVideoSection = document.getElementById('modal-video-section');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const modalActionVideo = document.getElementById('modal-action-video');
    const modalActionWhatsapp = document.getElementById('modal-action-whatsapp');
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    const galleryDots = document.getElementById('gallery-dots');

    let currentSlide = 0;
    let totalSlides = 0;

    function goToSlide(idx) {
        if (totalSlides === 0) return;
        currentSlide = (idx + totalSlides) % totalSlides;
        modalSlidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots active class
        const dots = galleryDots.querySelectorAll('.gallery-dot');
        dots.forEach((dot, dIdx) => {
            if (dIdx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function openDetailsModal(cardId) {
        const car = cars.find(c => c.id === cardId);
        if (!car) return;

        // 1. Text & Pricing Info
        modalCarName.textContent = car.name;
        modalCarStatus.textContent = car.status;
        modalCarPrice.textContent = car.price;
        modalCarTag.textContent = car.tag;
        modalCarTag.className = `card-tag ${car.tagClass}`;

        // 2. Video Player Setup
        modalVideoPlayer.src = car.video;
        modalVideoSection.style.display = 'none'; // Hide initially
        modalActionVideo.innerHTML = `
            <svg class="icon-btn-inline" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            View Walkthrough Video
        `;

        // 3. WhatsApp CTA Action Link
        const message = encodeURIComponent(`Hi MMM Autos, I am interested in the ${car.name} (${car.status}) priced at ${car.price}. Please check availability.`);
        modalActionWhatsapp.href = `https://wa.me/2348156840439?text=${message}`;

        // 4. Generate Gallery Slides & Dots
        modalSlidesWrapper.innerHTML = '';
        galleryDots.innerHTML = '';
        
        const galleryImages = car.images && car.images.length > 0 ? car.images : [car.photo];
        totalSlides = galleryImages.length;
        currentSlide = 0;

        galleryImages.forEach((imgSrc, idx) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${car.name} - Slide ${idx + 1}`;
            modalSlidesWrapper.appendChild(img);

            const dot = document.createElement('div');
            dot.className = `gallery-dot${idx === 0 ? ' active' : ''}`;
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(idx);
            });
            galleryDots.appendChild(dot);
        });

        // Show/hide gallery arrows based on slide count
        if (totalSlides <= 1) {
            galleryPrev.style.display = 'none';
            galleryNext.style.display = 'none';
            galleryDots.style.display = 'none';
        } else {
            galleryPrev.style.display = 'flex';
            galleryNext.style.display = 'flex';
            galleryDots.style.display = 'flex';
        }

        // Reset slide wrapper translation
        modalSlidesWrapper.style.transform = 'translateX(0%)';

        // 5. Open Modal Panel
        detailsModal.classList.add('active');
        
        // Save current scroll position to prevent the page from jumping back to the top (hero section)
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        document.body.setAttribute('data-scroll-y', scrollY);
        
        document.body.classList.add('modal-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }

    function closeDetailsModal() {
        detailsModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        // Restore scroll position
        const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0', 10);
        
        // Temporarily override smooth scroll to prevent visual scrolling animation
        const htmlElement = document.documentElement;
        const originalScrollBehavior = htmlElement.style.scrollBehavior;
        htmlElement.style.scrollBehavior = 'auto';
        
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.removeAttribute('data-scroll-y');
        window.scrollTo(0, scrollY);
        
        // Restore original scroll behavior in the next animation frame
        requestAnimationFrame(() => {
            htmlElement.style.scrollBehavior = originalScrollBehavior;
        });
        
        modalVideoPlayer.pause();
        modalVideoPlayer.src = '';
    }

    // Attach click events using delegation
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.car-card');
        if (!card) return;

        // Exclude actions if clicked directly on buttons to avoid double execution, 
        // but if clicked on card details button, open the modal
        const cardId = card.getAttribute('data-id');
        if (cardId) {
            e.preventDefault();
            openDetailsModal(cardId);
        }
    });

    // Gallery Prev / Next Controls
    galleryPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentSlide - 1);
    });

    galleryNext.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentSlide + 1);
    });

    // Walkthrough Video Button Toggle inside Modal
    modalActionVideo.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modalVideoSection.style.display === 'none') {
            modalVideoSection.style.display = 'block';
            modalActionVideo.innerHTML = `
                <svg class="icon-btn-inline" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
                Hide Walkthrough Video
            `;
            modalVideoPlayer.play().catch(err => {
                console.log("Walkthrough play prevented:", err);
            });
        } else {
            modalVideoSection.style.display = 'none';
            modalActionVideo.innerHTML = `
                <svg class="icon-btn-inline" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                View Walkthrough Video
            `;
            modalVideoPlayer.pause();
        }
    });

    detailsClose.addEventListener('click', closeDetailsModal);
    detailsBackdrop.addEventListener('click', closeDetailsModal);

    // Escape Key to Close Details Modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailsModal.classList.contains('active')) {
            closeDetailsModal();
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
