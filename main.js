const pagoRecargo = {
    "efectivo":0,
    "pagadios": 35,
    "patacones": 9,
    "lecops": 10,
    "dolares": 25
};

function calcularCuotas (precio, cuotas, metodo) {
    const interesPorcentaje = pagoRecargo[metodo] || 0;
    const interes = precio * (interesPorcentaje / 100);
    const totalConInteres = precio + interes;
    const valorCuota = totalConInteres / cuotas;
    return valorCuota;
}

//clase constructora
class Prenda {
    constructor(id, tipo, marca, descripcion, precio){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

//arrays de prendas de ropa
const listaPrendas = [
    new Prenda(1, 'Remera', 'Nike', 'Remera Nike negra basica', '15000'),
    new Prenda(2, 'Buzo', 'Undefined', 'Buzo undefined "TRAPSTAR"', '50000'),
    new Prenda(3, 'Buzo', 'Nike', 'Buzo Nike ACG crema', '50000'),
    new Prenda(4, 'Remera', 'Lacoste', 'Remera Lacoste blanca', '20000'),
    new Prenda(5, 'Buzo', 'Nike', 'Buzo Nike Air Jordan', '50000')
];


function mostrarPrendaPorId(id){
    const Prenda = listaPrendas.find(prod => prod.id === id);

    if(Prenda){
        const infoProducto = `
        ID: ${Prenda.id}
        Tipo: ${Prenda.tipo}
        Marca: ${Prenda.marca}
        Descripcion: ${Prenda.descripcion}

        Precio: $${Prenda.precio.toLocaleString('es-AR')} ARS` // //buscado en internet
        alert(`Esta es la prenda que selecciono:\n${infoProducto}`);
    }
    else{
        alert(`No se encontro ninguna prenda con ese ID: ${id}`);
    }
}

function seleccionarMetodo(){
    const promptMetodo = prompt(`Seleccione el metodo de pago:\n${Object.keys(pagoRecargo).join(", ")}`); //buscado en internet
    const metodoPago = promptMetodo.toLowerCase();

    if(pagoRecargo.hasOwnProperty(metodoPago)){
        return metodoPago;
    }
    else{
        alert("Ingrese un metodo de pago");
        return seleccionarMetodo();
    }
}

function seleccionarCuotas(){
    let cuotas;
    do{
        cuotas = parseInt(prompt("Por favor, ingrese la cantidad de cuotas que desea abonar, 1, 3, 6 y 12 cuotas son las disponibles."));
        if(cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12){
            alert("Solo puede pagar en 1 / 3 / 6 / 12 cuotas");
        }
    } while(isNaN(cuotas) || (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12));

    return cuotas;
}

function mostrarPrendas(){
    let booleano = true;
    while(booleano){
        alert("Buenas! pase a ver esta hermosa ropa:");
        let lista = "Estas son nuestras ofertas del finde: \n \n";
        
        for (const Prenda of listaPrendas) {
            lista += `${Prenda.id} - ${Prenda.descripcion} \n`
        }
        const idInicial = parseInt(prompt(lista + '\n En que prenda esta interesado? (presione su respectivo ID): \n "9" si quiere salir de este menu'));
        const productoSeleccionado = listaPrendas.find(prod => prod.id === idInicial);

        if(idInicial === 9){
            alert("Gracias, vuelva pronto!")
            return booleano = false
        }
        else if(productoSeleccionado){
            mostrarPrendaPorId(idInicial);

            const metodo = seleccionarMetodo();
            const cuotas = seleccionarCuotas();

            const valorCuota = calcularCuotas(productoSeleccionado.precio, cuotas, metodo);
            alert(`Su cuota sera de: $${valorCuota.toLocaleString('es-AR')} ARS`);
        }
        else{
            alert(`No hay nada con ese ID: ${idInicial}`);
        }

        booleano = volverInicio();

        function volverInicio(){
            const nose = prompt("Volver atras? (si o no)");

            if(nose === "no"){
                alert("Gracias por utilizar este sistema. Hasta luego");
            }
            else if(nose === "si"){
                return mostrarPrendas();
            }
            else{
                alert("Por favor ingresa si o no");
                return volverInicio();
            }
        }
    }
}

mostrarPrendas();