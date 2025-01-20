document.addEventListener('DOMContentLoaded', () => {
    // Initially hide all content
    const content = document.querySelectorAll('.hidden-content');
    content.forEach(element => {
        element.style.opacity = '0';
    });

    // Function to animate typing effect
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        return new Promise(resolve => {
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    // Function to animate list items one by one
    async function animateList(list) {
        const items = list.querySelectorAll('li');
        for (let item of items) {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
        }
        
        for (let item of items) {
            await new Promise(resolve => setTimeout(resolve, 100));
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    }

    // Main animation sequence
    async function startAnimations() {
        // Fade in the content
        content.forEach(element => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 1s ease-in-out';
        });

        // Animate section title
        const sectionTitle = document.querySelector('.section-title');
        await typeWriter(sectionTitle, sectionTitle.textContent);

        // Animate introduction
        const introText = document.querySelector('.introduction p');
        await typeWriter(introText, introText.textContent, 10);

        // Animate goals title
        const goalsTitle = document.querySelector('.goals-title');
        await typeWriter(goalsTitle, goalsTitle.textContent);

        // Animate lists
        const lists = document.querySelectorAll('.animated-list');
        for (let list of lists) {
            await animateList(list);
        }

        // Animate quotes title
        const quotesTitle = document.querySelector('.quotes-title');
        await typeWriter(quotesTitle, quotesTitle.textContent);

        // Animate quotes
        const quotes = document.querySelectorAll('.quote p');
        for (let quote of quotes) {
            await typeWriter(quote, quote.textContent, 20);
        }
    }

    // Start animations after a short delay
    setTimeout(startAnimations, 500);
});
