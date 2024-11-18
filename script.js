// burger menu expand
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

function expandSidebar() {
    sidebar.style.display = "block";
} 

// burger menu close 
const close = document.querySelector('.close');

function closeSidebar() {
    sidebar.style.display = 'none';
}


// add to cart button adds product to cart array

const cart = JSON.parse(localStorage.getItem('cart')) || [];

if (window.location.pathname.includes('index.html')) {
    // Code specific to index.html
    console.log('Running code for index.html');

    // Adding to cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const title = button.getAttribute('data-title');
        const price = parseFloat(button.getAttribute('data-price'));

        // Push the product to the cart array
        cart.push({ title, price });

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log(`${title} added to the cart!`);
    }
}

if (window.location.pathname.includes('cart.html')) {
    // Code specific to cart.html
    console.log('Running code for cart.html');


    function updateCartDisplay() {
        const cartList = document.getElementById('cart-list');
        if (!cartList) return;
    
        cartList.innerHTML = ''; // Clear the cart list
    
        cart.forEach((item, index) => {
            // Create the main <li> element
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
    
            // Create and append the title element
            const titleElement = document.createElement('span');
            titleElement.classList.add('cart-title');
            titleElement.textContent = item.title;
    
            // Create and append the quantity input
            const quantityElement = document.createElement('input');
            quantityElement.classList.add('cart-quantity');
            quantityElement.type = 'number';
            quantityElement.min = 0; // Allow zero for removal
            quantityElement.max = 1; // Max is 1, no more than 1 allowed
            quantityElement.value = 1; // Default quantity is 1
            quantityElement.addEventListener('change', () => {
                if (parseInt(quantityElement.value) === 0) {
                    removeItemFromCart(index); // Remove the item if quantity is 0
                }
            });
    
            // Create and append the price element
            const priceElement = document.createElement('span');
            priceElement.classList.add('cart-price');
            priceElement.textContent = `R${item.price}`;
    
            // Append all elements to the listItem
            listItem.appendChild(titleElement);
            listItem.appendChild(quantityElement);
            listItem.appendChild(priceElement);
    
            // Append the listItem to the cartList
            cartList.appendChild(listItem);
        });
    
        updateCartTotal();
    }
    
    // Function to remove an item from the cart
    function removeItemFromCart(index) {
        cart.splice(index, 1); // Remove the item from the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartDisplay(); // Refresh the cart display
    }
    
    // Function to update the total price
    function updateCartTotal() {
        const updatedTotal = cart.reduce(
            (acc, item) => acc + item.price,
            0
        );
        document.querySelector('.subtotal').textContent = `R${updatedTotal.toFixed(2)}`;
        document.querySelector('.total').textContent = `R${(updatedTotal + 50).toFixed(2)}`; // Assuming delivery fee is 50
    }
    
    // Initialize the cart display
    updateCartDisplay();
}

// greeting message
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = 'Good Morning! Ready to start a new chapter? Find a great read to brighten your day!';
} else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon! Take a break and explore – the next book adventure awaits you here at Second Chapter!';
} else {
    greetingMessage = 'Good Evening! Wind down with a captivating story – every book has a world to discover!';
}

greetingElement.textContent = greetingMessage;
}

// testimonial automatic slider 
document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelector('.testimonial-slider');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

function autoScroll() {
    currentIndex = (currentIndex + 1) % cards.length;
    slider.scrollLeft = currentIndex * cardWidth;
}

setInterval(autoScroll, 3000);
});


// faq buttons expand
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

const faqButtons = document.querySelectorAll('.faq-question');


faqButtons.forEach((button) => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    button.addEventListener('click', () => {

        answer.classList.toggle('open');
        button.classList.toggle('expanded');

        if (answer.classList.contains('open')) {
            icon.classList.remove('fa-circle-plus');
            icon.classList.add('fa-circle-minus');
        } else {
            icon.classList.remove('fa-circle-minus');
            icon.classList.add('fa-circle-plus');
        }
    });
});

