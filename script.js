document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const numHearts = 20; // Número de corazones
    const numFlowers = 15; // Número de flores

    // Función para crear un elemento con animaciones aleatorias
    function createElement(className, numElements) {
        for (let i = 0; i < numElements; i++) {
            const element = document.createElement('div');
            element.className = className;
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = Math.random() * 100 + 'vh';
            element.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Duración aleatoria
            element.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio
            container.appendChild(element);
        }
    }

    createElement('heart', numHearts);
    createElement('flower', numFlowers);
});