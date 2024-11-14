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

// greeting message
const greetingElement = document.getElementById('greeting');
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


// testimonial automatic slider 
const slider = document.querySelector('.testimonial-slider');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

function autoScroll() {
    currentIndex = (currentIndex + 1) % cards.length;
    slider.scrollLeft = currentIndex * cardWidth;
}

setInterval(autoScroll, 3000);

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


