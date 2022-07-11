window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const bubbles = document.querySelector('.visual');
    const color = ['ffbe0b', 'fb5607', 'ff006e', '8338ec', '3a86ff', '5e6472'];
    
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sound[index].currentTime = 0;
            sound[index].play();
            createBubble(index);
        });
        
    });
    let createBubble = function (index) {
        const bubble = document.createElement('div');
        bubbles.appendChild(bubble);
        bubble.style.background = `#${color[index]}`;
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', () => {
            bubbles.removeChild(bubble);
        });
    };

});
if (window.Promise) {
    console.log(window.Promise);
} 
