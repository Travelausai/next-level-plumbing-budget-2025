document.addEventListener('DOMContentLoaded', function() {
    // Get calculator elements
    const renovationCostInput = document.getElementById('renovation-cost');
    const calculateBtn = document.getElementById('calculate-btn');
    const currentPriceElement = document.getElementById('current-price');
    const futurePriceElement = document.getElementById('future-price');
    const savingsAmountElement = document.getElementById('savings-amount');
    
    // Set initial values
    updateCalculator(7500);

    // Add event listener for calculate button
    calculateBtn.addEventListener('click', function() {
        const renovationCost = parseFloat(renovationCostInput.value);
        if (isNaN(renovationCost) || renovationCost <= 0) {
            alert('Please enter a valid renovation cost.');
            return;
        }
        updateCalculator(renovationCost);
    });

    // Add event listener for input changes
    renovationCostInput.addEventListener('input', function() {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Function to update calculator results
    function updateCalculator(renovationCost) {
        // Calculate additional costs
        // Based on the example in the document:
        // For a £7,500 renovation:
        // - NI increase: £90 (about 1.2% of the renovation cost)
        // - Secondary Threshold reduction: £165 (about 2.2% of the renovation cost)
        // - Materials cost adjustment: £210 (about 2.8% of the renovation cost)
        
        // Calculate proportionally based on the example
        const niIncreaseFactor = 90 / 7500; // 0.012 or 1.2%
        const thresholdFactor = 165 / 7500; // 0.022 or 2.2%
        const materialsFactor = 210 / 7500; // 0.028 or 2.8%
        
        const niIncrease = Math.round(renovationCost * niIncreaseFactor);
        const thresholdCost = Math.round(renovationCost * thresholdFactor);
        const materialsCost = Math.round(renovationCost * materialsFactor);
        
        const totalAdditionalCost = niIncrease + thresholdCost + materialsCost;
        const futurePrice = renovationCost + totalAdditionalCost;
        
        // Format currency
        const formatCurrency = (value) => {
            return '£' + value.toLocaleString('en-UK');
        };
        
        // Update display
        currentPriceElement.textContent = formatCurrency(renovationCost);
        futurePriceElement.textContent = formatCurrency(futurePrice);
        savingsAmountElement.textContent = formatCurrency(totalAdditionalCost);
        
        // Add animation effect to highlight the savings
        savingsAmountElement.classList.add('highlight-animation');
        setTimeout(() => {
            savingsAmountElement.classList.remove('highlight-animation');
        }, 1000);
    }
    
    // Smooth scrolling for anchor links (excluding read more links)
    document.querySelectorAll('a[href^="#"]:not(.read-more)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip empty anchors
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Read More functionality for testimonials
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const testimonialText = this.closest('.testimonial-text');
            const shortText = testimonialText.querySelector('.short-text');
            const fullText = testimonialText.querySelector('.full-text');
            
            if (shortText.style.display !== 'none') {
                // Show full text
                shortText.style.display = 'none';
                fullText.style.display = 'inline';
                this.textContent = 'read less';
            } else {
                // Show short text
                shortText.style.display = 'inline';
                fullText.style.display = 'none';
                this.textContent = 'read more';
            }
        });
    });
    
    // Pop-up CTA functionality
    const popup = document.getElementById('popup-cta');
    const closePopup = document.querySelector('.close-popup');
    
    // Show popup after 5 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 5000);
    
    // Close popup when clicking the X
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }
    
    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Show popup when user scrolls to bottom
    let popupShown = false;
    window.addEventListener('scroll', () => {
        if (!popupShown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
            popup.style.display = 'block';
            popupShown = true;
        }
    });
});