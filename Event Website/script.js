//Signin Page
    const form = document.getElementById('registrationForm');
        const modal = document.getElementById('successModal');
        const closeBtn = document.getElementById('closePopup');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const password = document.getElementById('userPassword').value;

            if (name && email && password) {
                modal.classList.add('active');
            }
        });

        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            form.reset();
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                form.reset();
            }
        });

       

       

       
        //Suppliers
         // Pagination functionality for all sections
        const paginationBars = document.querySelectorAll('.pagination-bar');
        
        paginationBars.forEach(bar => {
            const buttons = bar.querySelectorAll('.page-nav');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    if (!this.disabled && !this.classList.contains('current')) {
                        // Remove current class from all buttons in this bar
                        bar.querySelectorAll('.page-nav').forEach(btn => {
                            btn.classList.remove('current');
                        });
                        
                        // Add current class to clicked button (if it's a number)
                        if (!this.textContent.includes('«') && !this.textContent.includes('»')) {
                            this.classList.add('current');
                        }
                        
                        // Scroll to section
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });
        });

        // Category click handling
        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                console.log('Category clicked:', this.querySelector('.category-name').textContent);
            });
        });

        // Provider card click handling
        const providerCards = document.querySelectorAll('.provider-card');
        providerCards.forEach(card => {
            card.addEventListener('click', function() {
                console.log('Provider clicked:', this.querySelector('.provider-name').textContent);
            });
        });

      

        //NAvbar
        // Logo animation on click
        const logoLink = document.getElementById('logoLink');
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            animateLogo(this);
        });

        function animateLogo(element) {
            element.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
            console.log('Logo clicked - navigating to home');
        }

        // Login button functionality
        const loginButton = document.getElementById('loginButton');
        loginButton.addEventListener('click', function() {
            handleLogin();
        });

        function handleLogin() {
            console.log('Login button clicked');
            showMessage('Redirecting to login page...');
            // Simulate login redirect
            setTimeout(() => {
                console.log('Opening login modal...');
            }, 500);
        }

        // Register button functionality
        const registerButton = document.getElementById('registerButton');
        registerButton.addEventListener('click', function() {
            handleRegister();
        });

        function handleRegister() {
            console.log('Sign Up button clicked');
            showMessage('Opening registration form...');
            this.textContent = 'Processing...';
            setTimeout(() => {
                this.textContent = 'Sign Up';
                console.log('Registration form ready');
            }, 1000);
        }

        // Navigation menu click handler
        const menuAnchors = document.querySelectorAll('.menu-anchor');
        menuAnchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                handleNavigation(this);
            });
        });

        function handleNavigation(element) {
            const section = element.textContent;
            console.log(`Navigating to: ${section}`);
            
            // Remove active class from all
            menuAnchors.forEach(a => a.style.color = '#333');
            
            // Add active state
            element.style.color = '#e91e63';
            
            showMessage(`Loading ${section} section...`);
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navigationMenu = document.getElementById('navigationMenu');

        mobileMenuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });

        function toggleMobileMenu() {
            navigationMenu.classList.toggle('active');
            const isOpen = navigationMenu.classList.contains('active');
            mobileMenuToggle.textContent = isOpen ? '✕' : '☰';
            console.log(`Mobile menu ${isOpen ? 'opened' : 'closed'}`);
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.top-navbar')) {
                navigationMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });

        // Message notification system
        function showMessage(text) {
            const messageBox = document.createElement('div');
            messageBox.textContent = text;
            messageBox.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background-color: #e91e63;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
                z-index: 2000;
                animation: slideInRight 0.3s ease;
            `;
            
            document.body.appendChild(messageBox);
            
            setTimeout(() => {
                messageBox.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    messageBox.remove();
                }, 300);
            }, 2500);
        }

        // Add animation keyframes
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);

        // Scroll effect for navbar
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            handleScroll();
        });

        function handleScroll() {
            const currentScroll = window.pageYOffset;
            const navbar = document.querySelector('.top-navbar');
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            navbar.style.transition = 'transform 0.3s ease';
            lastScroll = currentScroll;
        }

        // Track active section
        let activeSection = 'Home';
        function updateActiveSection(section) {
            activeSection = section;
            console.log(`Current active section: ${activeSection}`);
        }

        // Initialize page
        window.addEventListener('load', function() {
            console.log('One Event website loaded successfully');
            showMessage('Welcome to One Event!');
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navigationMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });

        //Reviews Section
          // Reviews data
        const reviewsData = [
            {
                id: 1,
                name: "John",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                review: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings."
            },
            {
                id: 2,
                name: "Celin",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                review: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings."
            },
            {
                id: 3,
                name: "Priyala",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                review: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings."
            },
            {
                id: 4,
                name: "Michael",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
                review: "The venue was absolutely stunning! Every detail was perfect and the staff made our special day unforgettable. Highly recommended for anyone planning their dream wedding."
            },
            {
                id: 5,
                name: "Sarah",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
                review: "Outstanding service and breathtaking venue! The architectural beauty combined with modern amenities made it the perfect choice for our celebration."
            }
        ];

        let currentIndex = 0;

        // Initialize carousel
        function initializeCarousel() {
            renderReviews();
            createIndicators();
            updateIndicators();
        }

        // Render reviews
        function renderReviews() {
            const container = document.getElementById('reviewsContainer');
            container.innerHTML = '';

            const prevIndex = getPrevIndex();
            const nextIndex = getNextIndex();

            // Create three cards: previous, current, next
            const indices = [prevIndex, currentIndex, nextIndex];
            const cardClasses = ['side-card', 'center-card', 'side-card'];

            indices.forEach((index, position) => {
                const review = reviewsData[index];
                const card = createReviewCard(review, cardClasses[position]);
                container.appendChild(card);
            });

            // Add fade-in animation
            container.classList.add('fade-in');
        }

        // Create review card element
        function createReviewCard(review, cardClass) {
            const card = document.createElement('div');
            card.className = `review-card ${cardClass}`;
            
            if (cardClass === 'center-card') {
                card.innerHTML = `
                    <img src="${review.image}" alt="${review.name}" class="reviewer-avatar">
                    <h3 class="reviewer-name">${review.name}</h3>
                    <p class="review-content">${review.review}</p>
                `;
            } else {
                card.innerHTML = `
                    <h3 class="reviewer-name" style="margin-top: 1rem;">${review.name}</h3>
                    <p class="review-content">${review.review}</p>
                `;
            }
            
            return card;
        }

        // Get previous index
        function getPrevIndex() {
            return currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1;
        }

        // Get next index
        function getNextIndex() {
            return currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1;
        }

        // Navigate to previous review
        function navigatePrev() {
            currentIndex = getPrevIndex();
            renderReviews();
            updateIndicators();
        }

        // Navigate to next review
        function navigateNext() {
            currentIndex = getNextIndex();
            renderReviews();
            updateIndicators();
        }

        // Create indicator dots
        function createIndicators() {
            const dotsContainer = document.getElementById('carouselDots');
            dotsContainer.innerHTML = '';

            reviewsData.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'indicator-dot';
                dot.addEventListener('click', () => navigateToIndex(index));
                dotsContainer.appendChild(dot);
            });
        }

        // Update active indicator
        function updateIndicators() {
            const dots = document.querySelectorAll('.indicator-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Navigate to specific index
        function navigateToIndex(index) {
            currentIndex = index;
            renderReviews();
            updateIndicators();
        }

        // Event listeners
        document.getElementById('prevButton').addEventListener('click', navigatePrev);
        document.getElementById('nextButton').addEventListener('click', navigateNext);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                navigatePrev();
            } else if (e.key === 'ArrowRight') {
                navigateNext();
            }
        });

        // Auto-play functionality (optional)
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                navigateNext();
            }, 5000); // Change review every 5 seconds
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // Pause auto-play on hover
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
        carouselWrapper.addEventListener('mouseleave', startAutoPlay);

        // Touch/Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carouselWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    navigateNext();
                } else {
                    navigatePrev();
                }
            }
        }

        // Initialize on page load
        window.addEventListener('load', () => {
            initializeCarousel();
            startAutoPlay();
        });

        // Log current review
        function logCurrentReview() {
            console.log(`Current Review: ${reviewsData[currentIndex].name}`);
        }

        // Track navigation
        let navigationCount = 0;
        const originalNavigateNext = navigateNext;
        const originalNavigatePrev = navigatePrev;

        navigateNext = function() {
            navigationCount++;
            originalNavigateNext();
            logCurrentReview();
        };

        navigatePrev = function() {
            navigationCount++;
            originalNavigatePrev();
            logCurrentReview();
        };
        //Browse By Category
           // Categories data with 12 items
        const categoriesData = [
            {
                id: 1,
                name: "CELEBRANT",
                image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                name: "MAKEUP ARTIST",
                image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
            },
            {
                id: 3,
                name: "WEDDING VENUE",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop"
            },
            {
                id: 4,
                name: "DECORATORS",
                image: "https://images.unsplash.com/photo-1519167758481-83f29da8ae8d?w=400&h=300&fit=crop"
            },
            {
                id: 5,
                name: "PHOTOGRAPHERS",
                image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop"
            },
            {
                id: 6,
                name: "VIDEOGRAPHERS",
                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop"
            },
            {
                id: 7,
                name: "CATERERS",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop"
            },
            {
                id: 8,
                name: "FLORISTS",
                image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop"
            },
            {
                id: 9,
                name: "DJ & MUSIC",
                image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
            },
            {
                id: 10,
                name: "CHOREOGRAPHERS",
                image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop"
            },
            {
                id: 11,
                name: "PLANNERS",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
            },
            {
                id: 12,
                name: "INVITATION CARDS",
                image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop"
            }
        ];

        const itemsPerPage = 4;
        let currentPage = 1;
        const totalPages = Math.ceil(categoriesData.length / itemsPerPage);

        // Initialize page
        function initializePage() {
            displayCategories();
            createPagination();
            updateViewAllCount();
        }

        // Display categories for current page
        function displayCategories() {
            const container = document.getElementById('categoriesContainer');
            container.innerHTML = '';

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentCategories = categoriesData.slice(startIndex, endIndex);

            currentCategories.forEach(category => {
                const categoryBox = createCategoryElement(category);
                container.appendChild(categoryBox);
            });

            container.classList.add('fade-in');
            setTimeout(() => {
                container.classList.remove('fade-in');
            }, 500);
        }

        // Create category element
        function createCategoryElement(category) {
            const box = document.createElement('div');
            box.className = 'category-box';
            box.innerHTML = `
                <div class="category-image-wrapper">
                    <img src="${category.image}" alt="${category.name}">
                </div>
                <div class="category-label">
                    <h3 class="category-title">${category.name}</h3>
                </div>
            `;

            box.addEventListener('click', () => {
                handleCategoryClick(category);
            });

            return box;
        }

        // Handle category click
        function handleCategoryClick(category) {
            console.log(`Category clicked: ${category.name}`);
            showNotification(`Opening ${category.name} category...`);
        }

        // Create pagination controls
        function createPagination() {
            const controls = document.getElementById('paginationControls');
            controls.innerHTML = '';

            // Previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-nav-btn';
            prevBtn.innerHTML = '«';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', goToPreviousPage);
            controls.appendChild(prevBtn);

            // Page number buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = 'page-number-btn';
                pageBtn.textContent = i;
                
                if (i === currentPage) {
                    pageBtn.classList.add('active-page');
                }

                pageBtn.addEventListener('click', () => goToPage(i));
                controls.appendChild(pageBtn);
            }

            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-nav-btn';
            nextBtn.innerHTML = '»';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', goToNextPage);
            controls.appendChild(nextBtn);
        }

        // Go to previous page
        function goToPreviousPage() {
            if (currentPage > 1) {
                currentPage--;
                updateDisplay();
                logPageChange('Previous');
            }
        }

        // Go to next page
        function goToNextPage() {
            if (currentPage < totalPages) {
                currentPage++;
                updateDisplay();
                logPageChange('Next');
            }
        }

        // Go to specific page
        function goToPage(pageNumber) {
            if (pageNumber !== currentPage) {
                currentPage = pageNumber;
                updateDisplay();
                logPageChange(`Page ${pageNumber}`);
            }
        }

        // Update display
        function updateDisplay() {
            displayCategories();
            createPagination();
            scrollToTop();
        }

        // Scroll to top smoothly
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Update view all count
        function updateViewAllCount() {
            const viewAllLink = document.getElementById('viewAllLink');
            viewAllLink.textContent = `View Al (${categoriesData.length})`;
        }

        // Log page change
        function logPageChange(action) {
            console.log(`Page navigation: ${action} - Now on page ${currentPage} of ${totalPages}`);
        }

        // Notification system
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #333;
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideInRight 0.3s ease;
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 2500);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToPreviousPage();
            } else if (e.key === 'ArrowRight') {
                goToNextPage();
            }
        });

        // View all link handler
        document.getElementById('viewAllLink').addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(`Showing all ${categoriesData.length} categories`);
            console.log('View All clicked');
        });

        // Track page views
        let pageViews = {};
        const originalGoToPage = goToPage;

        goToPage = function(pageNumber) {
            pageViews[pageNumber] = (pageViews[pageNumber] || 0) + 1;
            console.log(`Page ${pageNumber} viewed ${pageViews[pageNumber]} times`);
            originalGoToPage(pageNumber);
        };

        // Add animation styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);

        // Initialize on page load
        window.addEventListener('load', () => {
            initializePage();
            console.log('Browse By Category section loaded successfully');
        });