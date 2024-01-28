// Selecciona el botón de modo oscuro
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

//Seleccionamos los bombillos
const luzOn = document.querySelector('.bombillo-on');
const luzOff = document.querySelector('.bombillo-off');

modoOscuroBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    //Si el modo oscuro está activo =>
    const darkModeActive = document.body.classList.contains('dark-mode');

    //Si lo está, muestra el bombillo apagado y oculta el encendido

    if (darkModeActive) {
        luzOff.style.display = 'block';
        luzOn.style.display = 'none';
    } else { //Si no está activo, muestra solamente el bombillo encendido
        luzOff.style.display = 'none';
        luzOn.style.display = 'block';
    }
});