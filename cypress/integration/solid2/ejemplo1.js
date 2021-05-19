class ProductosEnAlacena {
    productos = ["Piña", "Manzanas", "Harina"];
    existeProducto(producto) {
      // indexOf nos devuelve la posición del producto en el array,
      // si la posición es -1 significa que no existe el producto
      return this.productos.indexOf(producto) !== -1;
    }
  }
  