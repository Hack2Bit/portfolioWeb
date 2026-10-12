const cursor = document.getElementById('cursor');

// মাউস মুভমেন্ট ট্র্যাক করা
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// লিঙ্কে বা বাটনে গেলে টার্গেট লক ইফেক্ট
const targets = document.querySelectorAll('a, button, .hover-target');
targets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-lock');
    });
    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-lock');
    });
});