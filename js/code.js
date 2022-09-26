console.log('Aplicacion calculadora! ');

function sumar(){
    const adicion = document.getElementById('adicion');
    
    let operandoA = adicion['operandoA'];
    let operandoB = adicion['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = '¡Campos vacios!'
    }
    document.getElementById('resultado1').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const restar = document.getElementById('restar');
    
    let operandoA = restar['operandoA'];
    let operandoB = restar['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = '¡Campos vacios!'
    }
    document.getElementById('resultado2').innerHTML = `Resultado: ${resultado}`;
}

function producto(){
    const producto = document.getElementById('producto');
    
    let operandoA = producto['operandoA'];
    let operandoB = producto['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = '¡Campos vacios!'
    }
    document.getElementById('resultado3').innerHTML = `Resultado: ${resultado}`;
}

function division(){
    const division = document.getElementById('division');
    
    let operandoA = division['operandoA'];
    let operandoB = division['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = '¡Campos vacios!'
    }
    document.getElementById('resultado4').innerHTML = `Resultado: ${resultado}`;
}

