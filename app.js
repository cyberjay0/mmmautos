/* ==========================================================================
   MMM Autos Interactivity Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Currency Exchange System
    // ==========================================
    const currencySelect = document.getElementById('currency-select');
    const priceElements = document.querySelectorAll('.car-price');

    // Exchange rates relative to USD (1.0 USD base)
    const exchangeRates = {
        USD: 1.0,
        NGN: 1500, // 1 USD = 1500 NGN
        EUR: 0.92, // 1 USD = 0.92 EUR
        GBP: 0.78, // 1 USD = 0.78 GBP
        JPY: 155   // 1 USD = 155 JPY
    };

    // Currency Formatting Config
    const currencyFormats = {
        NGN: { locale: 'en-NG', symbol: '₦', precision: 0 },
        USD: { locale: 'en-US', symbol: '$', precision: 0 },
        EUR: { locale: 'de-DE', symbol: '€', precision: 0 },
        GBP: { locale: 'en-GB', symbol: '£', precision: 0 },
        JPY: { locale: 'ja-JP', symbol: '¥', precision: 0 }
    };

    function updatePrices(targetCurrency) {
        const rate = exchangeRates[targetCurrency];
        const format = currencyFormats[targetCurrency];

        priceElements.forEach(elem => {
            const card = elem.closest('.car-card');
            if (!card) return;

            // Get base price in USD
            const basePriceUSD = parseFloat(card.getAttribute('data-base-price'));
            if (isNaN(basePriceUSD)) return;

            // Convert to target currency
            let convertedAmount = basePriceUSD * rate;

            // Apply minor rounding to match standard pricing looks (e.g. 5,200,000 Naira instead of 5,200,005)
            if (targetCurrency === 'NGN') {
                // Round to nearest 100,000 for standard display, or nearest 50,000
                convertedAmount = Math.round(convertedAmount / 50000) * 50000;
            } else if (targetCurrency === 'USD' || targetCurrency === 'EUR' || targetCurrency === 'GBP') {
                // Round to nearest 100 for clean figures
                convertedAmount = Math.round(convertedAmount / 100) * 100;
            } else {
                convertedAmount = Math.round(convertedAmount);
            }

            // Format price string
            const formattedPrice = convertedAmount.toLocaleString(format.locale, {
                minimumFractionDigits: format.precision,
                maximumFractionDigits: format.precision
            });

            elem.textContent = `${format.symbol}${formattedPrice}`;
        });
    }

    // Initialize display values in Naira
    updatePrices('NGN');

    // Event listener for currency change
    currencySelect.addEventListener('change', (e) => {
        updatePrices(e.target.value);
    });


    // ==========================================
    // 2. Hover-to-Play Video Walkthrough
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

            // Play video with error catch (for autoplay restriction compliance)
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
    // 3. Walkthrough Video Modal Player
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
    // 4. Inventory Filtering System
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
    // 5. Mobile Navigation Menu Toggle
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
