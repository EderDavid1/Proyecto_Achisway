const botonBuscar = document.getElementById('boton');

botonBuscar.addEventListener('click', () => {
    const buscador = document.getElementById('consulta');
    const consulta = buscador.value.toLowerCase();
    const productos = [...document.querySelectorAll('.producto')];

    productos.forEach((producto) => {
        const nombreProducto = producto.querySelector('h3').textContent.toLowerCase();

        if(consulta === nombreProducto){
            producto.style.display = 'none';
        }

        /*
        if (nombreProducto.includes(consulta)) {
            producto.style.display = 'block';
        }else {
            producto.style.display = 'none';
        }
        */
    });
});