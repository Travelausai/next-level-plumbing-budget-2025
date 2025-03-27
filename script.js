document.addEventListener('DOMContentLoaded', function() {
    // Get calculator elements
    const renovationCostInput = document.getElementById('renovation-cost');
    const calculateBtn = document.getElementById('calculate-btn');
    const currentPriceElement = document.getElementById('current-price');
    const futurePriceElement = document.getElementById('future-price');
    const savingsAmountElement = document.getElementById('savings-amount');
    const niIncreaseElement = document.getElementById('ni-increase');
    const thresholdCostElement = document.getElementById('threshold-cost');
    const materialsCostElement = document.getElementById('materials-cost');

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
        niIncreaseElement.textContent = formatCurrency(niIncrease);
        thresholdCostElement.textContent = formatCurrency(thresholdCost);
        materialsCostElement.textContent = formatCurrency(materialsCost);
        
        // Add animation effect to highlight the savings
        savingsAmountElement.classList.add('highlight-animation');
        setTimeout(() => {
            savingsAmountElement.classList.remove('highlight-animation');
        }, 1000);
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const postcode = document.getElementById('postcode').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server
            // For this demo, we'll just show a success message
            alert(`Thank you, ${name}! Your consultation request has been received. We'll contact you shortly to arrange your free consultation.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});