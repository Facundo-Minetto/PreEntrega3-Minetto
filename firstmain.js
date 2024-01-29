//Sistema para calcular pago de un monto en cuotas

//function para calcular los pagos en cuotas
function calcularCuotas(monto, cantidadCuotas){
    let cuota = monto / cantidadCuotas; //calcular el monto de cada cuota

    alert(`El monto total es: ${monto}`);
    alert(`La cantidad de cuotas es: ${cantidadCuotas}`);
    alert(`El monto de cada cuota es: ${cuota}`);
}

//funcion para verificar si el usuario desea continuar
function deseaContinuar(){
    let respuesta = prompt('¿Desea calcular otra vez?');
    return respuesta === 'si';
}

do{
    let monto = Number(prompt('Ingrese el monto total:'));
    let cantidadCuotas = Number(prompt('Ingrese la cantidad de cuotas:'));

    calcularCuotas(monto, cantidadCuotas);
}while(deseaContinuar());