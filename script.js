const productos = [
    {
        id: 1,
        nombre: "Tarta de Chocolate",
        descripcion: "Deliciosa tarta de chocolate con crema.",
        precio: 15.00,
        imagen: "tarta_chocolate.jpg"
    },
    {
        id: 2,
        nombre: "Pastel de Fresas",
        descripcion: "Pastel fresco con fresas y crema batida.",
        precio: 12.00,
        imagen: "pastel_fresas.jpg"
    },
    {
        id: 3,
        nombre: "Galletas de Vainilla",
        descripcion: "Galletas crujientes de vainilla.",
        precio: 5.00,
        imagen: "galletas_vainilla.jpg"
    }
];

function mostrarProductos() {
    const lista = document.getElementById('producto-list');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
        `;
        lista.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);
