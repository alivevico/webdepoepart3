// Shared Part 3 JS - Accordion + Tabs + Fade-in
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === 'block';
        document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
        body.style.display = isOpen ? 'none' : 'block';
    });
});
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if(target) target.classList.add('active');
    });
});
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
});
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));