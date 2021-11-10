// Cálculos del cuadrado
    // Perímetro
    function perimetroCuadrado(lado){
        return parseFloat((lado * 4).toFixed(2));
        }  
    // Área
    function areaCuadrado (lado){
       return parseFloat((lado * lado).toFixed(2));
    }


// Cálcuclos del triángulo
    // Perímetro
    function perimetroTriangulo(lado1, lado2, base){
        return parseFloat(lado1 + lado2 + base).toFixed(2);
    }
    // Área
    function areaTriangulo (base, altura){
        return  parseFloat(((base*altura)/2).toFixed(2));
    }           


// Cálculos del círculo
;
    // Radio
        // const radioCirculo = 4;
    // Diámetro
    function diametroCirculo(radio){
        return parseFloat((radio * 2).toFixed(2));
    }    
    // Pi
        const pi = Math.PI;
    // Circunferencia
    function circunferenciaCirculo (radio){
        const diametro = diametroCirculo(radio);
        return parseFloat((diametro * pi).toFixed(2));
    }
    // Área 
    function areaCirculo(radio){
        return parseFloat(((radio * radio) * pi).toFixed(2)); 
    } 


// Interacción con HTML 
// Funciones del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("answer-output").innerHTML = "Perímetro: " + perimetro + " cm"
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm^2");
}

// Funciones del triángulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const inputLado2 = document.getElementById("inputLado2");
    const inputBase = document.getElementById("inputBase");
    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const base = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(("El perímetro del triángulo es: " + perimetro + " cm"));
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");
    const base = parseInt(inputBase.value);
    const altura =parseInt(inputAltura.value);
    const area = areaTriangulo(base, altura);
    alert("El área del triángulo es: " + area + " cm^2");
}

// Funciones del Círculo
function calcularCircunferenciaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const circunferencia = circunferenciaCirculo(value);
    alert(("La circunferencia del círculo es: " + circunferencia + " cm"));
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área del círculo es: " + area + " cm^2");
}