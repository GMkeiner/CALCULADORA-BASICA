const mensajeBienvenida = alert('BIENVENIDO A SISTEMA CALCULADORA :');
const mensajeIndicacion = alert('A CONTINUACION LAS INDICACIONES PARA USAR LA CALCULADORA:');
const opciones = alert('1: SUMAR , 2: RESTAR , 3: MULTIPLICAR , 4: DIVIDIR ');
const final = 'Fin del programa';

const opcion = prompt('ELIGE ENTRE (1-4 opciones):');

// ESTE PARA LA SUMA
if (opcion == 1){
    const numero1 = Number(prompt('Digite el primer numero :'));
    const numero2 = Number(prompt('Digite el segundo numero :'));
    const resultadoSuma = numero1 + numero2;
    alert('La suma entre '+ numero1 + '+' + numero2 + ' es : ' + resultadoSuma);

// ESTE PARA LA RESTA    
} else if (opcion == 2){
    const numero1 = Number(prompt('Digite el primer numero :'));
    const numero2 = Number(prompt('Digite el segundo numero :'));
    const resultadoResta = numero1 - numero2;
    alert('La resta entre '+ numero1 + '-' + numero2 + ' es : ' + resultadoResta);

// ESTE PARA LA MULTIPLICACION
} else if (opcion == 3){
    const numero1 = Number(prompt('Digite el primer numero :'));
    const numero2 = Number(prompt('Digite el segundo numero :'));
    const resultadoMultiplicacion = numero1 * numero2;
    alert('La multiplicacion entre '+ numero1 + '*' + numero2 + ' es : ' + resultadoMultiplicacion);

// ESTE PARA LA DIVISION
} else if (opcion == 4){
    const numero1 = Number(prompt('Digite el primer numero :'));
    const numero2 = Number(prompt('Digite el segundo numero :'));
    const resultadoDivision = numero1 / numero2;
    alert('La division entre '+ numero1 + '/' + numero2 + ' es : ' + resultadoDivision);
} else {
    alert('ESTA OPCION NO ESTA ENTRE LAS OPCIONES')
}

alert(final)
