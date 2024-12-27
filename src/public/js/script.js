let cantidad = 1;
const stockMaximo = 10;

function actualizarCantidad() {
    document.getElementById('cantidad').textContent = cantidad;
}

function incrementarCantidad() {
    if (cantidad < stockMaximo) {
        cantidad++;
        actualizarCantidad();
    }
}

function decrementarCantidad() {
    if (cantidad > 1) {
        cantidad--;
        actualizarCantidad();
    }
}

function mostrarFormulario() {
    document.getElementById('modalFormulario').style.display = 'block';
}

function cerrarFormulario() {
    document.getElementById('modalFormulario').style.display = 'none';
}

function getTallaSeleccionada() {
    const tallaSeleccionada = document.querySelector('.talla-btn.seleccionada');
    return tallaSeleccionada ? tallaSeleccionada.textContent : '';
}

function getSeccionProducto() {
    const seccionProducto = document.getElementById('seccionProducto').textContent;
    return seccionProducto;
}

function enviarPedido(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const producto = document.getElementById('nombreProducto').textContent;
    const talla = getTallaSeleccionada();
    const seccion = getSeccionProducto();

    // Crear mensaje para WhatsApp
    const mensaje = `¡Nuevo pedido!%0A
Producto: ${producto}%0A
Sección: ${seccion}%0A
Talla: ${talla}%0A
Cantidad: ${cantidad}%0A
Cliente: ${nombre}%0A
Dirección: ${direccion}%0A
Teléfono: ${telefono}`;

    // Número de WhatsApp (reemplaza con tu número)
    const numeroWhatsApp = '+5359518930';

    // Crear enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Cerrar el modal
    cerrarFormulario();
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modalFormulario');
    if (event.target == modal) {
        cerrarFormulario();
    }
}

// Agregar evento click a los botones de talla
document.querySelectorAll('.talla-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remover la clase seleccionada de todos los botones
        document.querySelectorAll('.talla-btn').forEach(btn => {
            btn.classList.remove('seleccionada');
        });
        // Agregar la clase seleccionada al botón clickeado
        this.classList.add('seleccionada');
    });
});
