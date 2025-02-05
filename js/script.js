document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const hiddenContent = document.getElementById('hiddenContent');
    const valentineAudio = document.getElementById('valentineAudio');

    if (startButton) {
        startButton.addEventListener('click', () => {
            hiddenContent.style.display = 'flex';
            valentineAudio.play().catch((error) => {
                const playButton = document.createElement('button');
                playButton.textContent = "Play Surprise Audio";
                playButton.classList.add('btn', 'btn-warning', 'mt-2');
                playButton.onclick = () => {
                    valentineAudio.play();
                    playButton.remove();
                };
                hiddenContent.appendChild(playButton);
            });
            startButton.style.display = 'none';
        });
    }

    // Keep hearts floating continuously
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    heart.style.position = 'fixed';  // Ensure hearts float independently
    heart.style.top = '0';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
} 
