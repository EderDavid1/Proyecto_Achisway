const atras = document.querySelector('.carrusel__atras');
const siguiente = document.querySelector('.carrusel__siguiente');
let list = [...document.querySelectorAll('.carrusel__elemento')];
let i = 0;

function siguienteImagen() {
    if(i < list.length - 1){
        list[i].style.display = 'none';
        list[i + 1].style.display = 'block';
        i++;
    } else {
        // Si llegamos al final de la lista, volvemos a la primera imagen
        list[i].style.display = 'none';
        list[0].style.display = 'block';
        i = 0;
    }
}

setInterval(siguienteImagen, 5000);

atras.addEventListener('click', () => { 
    if(i > 0){
        list[i].style.display = 'none';
        list[i - 1].style.display = 'block';
        i--;
    }
});

siguiente.addEventListener('click', () => {
    if(i < list.length - 1){
        list[i].style.display = 'none';
        list[i + 1].style.display = 'block';
        i++;
    }
});

/*
const atras = document.querySelector('.carrusel__atras');
const siguiente = document.querySelector('.carrusel__siguiente');
const puntos = document.querySelector('.carrusel__puntos');
let list = [...document.querySelectorAll('.carrusel__elemento')];
let i = 0;
let intervalId = null;

function siguienteImagen() {
  if (i < list.length - 1) {
    list[i].style.display = 'none';
    list[i + 1].style.display = 'block';
    i++;
  } else {
    list[i].style.display = 'none';
    list[0].style.display = 'block';
    i = 0;
  }
  actualizarPuntos();
}

function actualizarPuntos() {
  puntos.querySelectorAll('.punto').forEach((punto, index) => {
    if (index === i) {
      punto.classList.add('activo');
    } else {
      punto.classList.remove('activo');
    }
  });
}

atras.addEventListener('click', () => {
  if (i > 0) {
    list[i].style.display = 'none';
    list[i - 1].style.display = 'block';
    i--;
    actualizarPuntos();
  }
});

siguiente.addEventListener('click', () => {
  siguienteImagen();
});

intervalId = setInterval(siguienteImagen, 3000);*/