// burger menu expand
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

function expandSidebar() {
    sidebar.style.display = "block";
} 

// burger menu close 
const close = document.querySelector('.close');

function closeSidebar() {
    sidebar.style.display = "none";
}

// testimonial automatic slider 
const slider = document.querySelector('.testimonial-slider');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;
const totalCards = cards.length;

function autoScroll() {
    currentIndex = (currentIndex + 1) % totalCards;
    slider.scrollTo({
        left: cards[currentIndex].offsetLeft,
        behavior: 'smooth',
    });
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