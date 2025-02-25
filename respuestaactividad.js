const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Auriculares", precio: 100 }
];

const productoBuscado = productos.find(producto => producto.nombre === "Mouse");
console.log("Producto encontrado:", productoBuscado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Total de la compra:", totalCompra);
console.log("Lista de productos:", productos);

