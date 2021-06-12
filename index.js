document.querySelector('.container').addEventListener('click', e => {
    if (!e.target.classList.contains('slide')) return;

    document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));

    e.target.classList.add('active');
})