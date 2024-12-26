document.addEventListener("DOMContentLoaded", () => {
    const tracks = document.querySelectorAll('.track');
    tracks.forEach((track, index) => {
        setTimeout(() => {
            track.classList.add('visible');
        }, index * 300); // Stagger the animations
    });
});