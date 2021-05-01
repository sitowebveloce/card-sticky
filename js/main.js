// Select all cards
const card = document.querySelectorAll('.card');
let zIndex = 0;
let isSmall = false;
// Random color function
const randomRgb = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // console.log(randomRgb());

// Draw Cards Function
const drawCard = (c, size) => {
        let randomColor = randomRgb();
        // Card top distance
        c.style.top = c.dataset.top * 50;
        // Change background color
        c.style.background = randomColor;
        // Margin right check screen size
        if (!size) {
            c.style.marginRight = c.dataset.top + 2 + 'px';
        } else {
            c.style.marginRight = '-13px';
        }
        // Change z-index on click event
        c.addEventListener('click', () => {
            zIndex++
            c.style.zIndex = zIndex;
        });
        // Add label
        let label = document.createElement('span');
        // Change background color
        label.style.background = randomColor;
        // Set width and height
        label.style.width = '100px';
        label.style.height = '30px';
        // Label Position
        label.style.position = 'absolute';
        label.style.left = '-64px';
        label.style.top = '20px';
        label.style.borderRadius = '5px';
        // Take the title and copy inside the label
        label.innerHTML = c.querySelector('h2').innerText;
        label.style.textAlign = 'left';
        label.style.padding = '4px';
        // Append label, check if span already present and delete
        if (c.querySelector('span') === null) {
            c.appendChild(label);
        } else {
            // Remove span
            let spanToRemove = c.querySelector('span');
            c.removeChild(spanToRemove);
            // Append new span
            c.appendChild(label);
        }
    }
    // MAIN FUNCTION
const mainFunction = () => {
        // Check screen size
        window.innerWidth < 768 ? isSmall = true : isSmall = false;
        // Draw Card
        card.forEach(c => drawCard(c, isSmall));
        // ON RESIZE EVENT
        window.onresize = () => {
            if (window.innerWidth < 768) {
                // Set small true
                isSmall = true;
                // Redraw card
                card.forEach(c => drawCard(c, isSmall));
            } else if (window.innerWidth > 768) {
                // Set small false
                isSmall = false;
                // Redraw
                card.forEach(c => drawCard(c, isSmall));

            }
        }
    }
    // Run main function
mainFunction();