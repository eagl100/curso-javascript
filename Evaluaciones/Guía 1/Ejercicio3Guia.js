class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarDetalles() {
        console.log(`Trabajador: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    mostrarDetalles() {
        console.log(`Gerente: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

let trabajador1 = new Trabajador("Juan Pérez", 2000);
let trabajador2 = new Trabajador("Ana García", 1800);
let gerente1 = new Gerente("Carlos López", 5000, "Ventas");
let gerente2 = new Gerente("Marta Sánchez", 6000, "Marketing");

trabajador1.mostrarDetalles();
trabajador2.mostrarDetalles();
gerente1.mostrarDetalles();
gerente2.mostrarDetalles();
