// recomendaciones.js

// Datos de ejemplo para los productos recomendados
const productosRecomendados = [
  {
    nombre: "Producto 1",
    imagen: "/img/product/product-celu.jpg",
    enlace: "/html/productos.html/producto_1.html"
  },
  {
    nombre: "Producto 2",
    imagen: "/img/product/producto2.jpg",
    enlace: "/html/productos.html/producto_2.html"
  },
  {
    nombre: "Producto 3",
    imagen: "/img/product/producto3.jpg",
    enlace: "/html/productos.html/producto_3.html"
  },
  // Agrega más productos aquí
];

// Función para generar recomendaciones aleatorias
function generarRecomendaciones() {
  const seccionRecomendaciones = document.createElement("section");
  seccionRecomendaciones.classList.add("recomendaciones");

  const tituloRecomendaciones = document.createElement("h2");
  tituloRecomendaciones.textContent = "Productos recomendados";
  seccionRecomendaciones.appendChild(tituloRecomendaciones);

  const contenedorRecomendaciones = document.createElement("div");
  contenedorRecomendaciones.classList.add("recomendaciones-grid");

  // Obtener 3 recomendaciones aleatorias
  const recomendacionesAleatorias = obtenerRecomendacionesAleatorias(3);

  recomendacionesAleatorias.forEach(producto => {
    const recomendacion = document.createElement("a");
    recomendacion.href = producto.enlace;
    recomendacion.classList.add("recomendacion");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const nombre = document.createElement("p");
    nombre.textContent = producto.nombre;

    recomendacion.appendChild(imagen);
    recomendacion.appendChild(nombre);
    contenedorRecomendaciones.appendChild(recomendacion);
  });

  seccionRecomendaciones.appendChild(contenedorRecomendaciones);
  document.body.appendChild(seccionRecomendaciones);
}

// Función para obtener recomendaciones aleatorias
function obtenerRecomendacionesAleatorias(cantidad) {
  const recomendacionesAleatorias = [];
  const productosDisponibles = [...productosRecomendados];

  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * productosDisponibles.length);
    recomendacionesAleatorias.push(productosDisponibles[indiceAleatorio]);
    productosDisponibles.splice(indiceAleatorio, 1);
  }

  return recomendacionesAleatorias;
}

// Llamar a la función para generar recomendaciones al cargar la página
window.addEventListener("load", generarRecomendaciones);
