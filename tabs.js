function switchTab(event, category) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const projectsView = document.getElementById('projects-view');
    const artView = document.getElementById('art-view');

    if (category === 'art') {
        projectsView.classList.add('hidden');
        artView.classList.remove('hidden');
    } else {
        projectsView.classList.remove('hidden');
        artView.classList.add('hidden');

        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
}