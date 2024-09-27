const tarifaDiurno = 12000;
const tarifaNocturno = 16000;
const incrementoDomingoDiurno = 2000;
const incrementoDomingoNocturno = 3000;

const empleados = {
    empleado1: {
        nombre: "Empleado 1",
        horarios: [
            { dia: "Lunes", turno: "nocturno" },
            { dia: "Martes", turno: "nocturno" },
            { dia: "Miércoles", turno: "nocturno" },
            { dia: "Jueves", turno: "diurno" },
            { dia: "Viernes", turno: "diurno" }
        ]
    },
    empleado2: {
        nombre: "Empleado 2",
        horarios: [
            { dia: "Martes", turno: "nocturno" },
            { dia: "Miércoles", turno: "nocturno" },
            { dia: "Jueves", turno: "nocturno" },
            { dia: "Domingo", turno: "diurno" }
        ]
    },
    empleado3: {
        nombre: "Empleado 3",
        horarios: [
            { dia: "Miércoles", turno: "diurno" },
            { dia: "Jueves", turno: "diurno" },
            { dia: "Viernes", turno: "diurno" },
            { dia: "Sábado", turno: "nocturno" },
            { dia: "Domingo", turno: "nocturno" }
        ]
    }
};

function calcularPago(turno, dia) {
    let tarifa = 0;
    if (turno === "diurno") {
        tarifa = tarifaDiurno;
        if (dia === "Domingo") {
            tarifa += incrementoDomingoDiurno;
        }
    } else if (turno === "nocturno") {
        tarifa = tarifaNocturno;
        if (dia === "Domingo") {
            tarifa += incrementoDomingoNocturno;
        }
    }
    return tarifa;
}

function calcularPagoSemanal(empleado) {
    let totalSemanal = 0;
    empleado.pagoDiario = [];

    empleado.horarios.forEach(horario => {
        const pago = calcularPago(horario.turno, horario.dia);
        empleado.pagoDiario.push({ dia: horario.dia, pago });
        totalSemanal += pago;
    });

    empleado.totalSemanal = totalSemanal;
}

calcularPagoSemanal(empleados.empleado1);
calcularPagoSemanal(empleados.empleado2);
calcularPagoSemanal(empleados.empleado3);

