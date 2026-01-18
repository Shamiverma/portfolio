// --- 1. Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// --- 2. To-Do List Functionality ---
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button class="remove-btn">Delete</button>
        `;
        
        // Remove functionality
        li.querySelector('.remove-btn').addEventListener('click', () => li.remove());
        
        todoList.appendChild(li);
        todoInput.value = ''; // Clear input
    }
});

// --- 3. Form Validation ---
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully! 💌');
    }
});
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});