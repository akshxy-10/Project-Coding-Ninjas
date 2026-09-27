// Section switching logic
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.newpagelinks a');

let currentSectionId = 'home'; // matches the section visible by default on page load

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return; // handles the "#references" case safely for now

        if (targetId === currentSectionId) {
            alert('You are in that page');
            return;
        }

        sections.forEach(section => {
            section.style.display = 'none';
        });

        targetSection.style.display = (targetId === 'home') ? 'flex' : 'block';
        currentSectionId = targetId;
    });
});
