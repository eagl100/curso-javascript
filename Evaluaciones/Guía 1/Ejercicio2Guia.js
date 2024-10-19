class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

let producto1 = new Producto("Laptop", 1200);
let producto2 = new Producto("Teléfono", 800);
let producto3 = new Producto("Audífonos", 150);

producto1.mostrarDetalles();
producto2.mostrarDetalles();
producto3.mostrarDetalles();
