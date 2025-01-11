const acordionItems = document.querySelectorAll('.accordions-item');

acordionItems.forEach(item => {
    const question = item.querySelector('.accordion-question');
    const answer = item.querySelector('.accordion-answer');
    const iconToggle = item.querySelector('.icon-toggle');

    question.addEventListener('click', () => {
        // Cerrar todas las respuestas
        acordionItems.forEach(i => {
            const a = i.querySelector('.accordion-answer');
            const icon = i.querySelector('.icon-toggle');
            const q = i.querySelector('.accordion-question');
            a.classList.remove('is-active');
            a.classList.remove('slide-down');
            a.classList.add('slide-up');
            icon.src = './assets/images/icon-plus.svg';
            q.setAttribute('aria-expanded', false);
        });

        // Abrir la respuesta actual
        const isActive = answer.classList.toggle('is-active');

        // Alternar el ícono
        if (isActive) {
            answer.classList.remove('slide-up');
            answer.classList.add('slide-down');
            iconToggle.src = './assets/images/icon-minus.svg';
        } else {
            answer.classList.remove('slide-down');
            answer.classList.add('slide-up');
            iconToggle.src = './assets/images/icon-plus.svg';
        }

        // Actualizar aria-expanded en la pregunta
        question.setAttribute('aria-expanded', isActive);
    });
});