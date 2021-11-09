// Cálculos del cuadrado
console.group("Cuadrado");
    function perimetroCuadrado(lado){
        return parseFloat((lado * 4).toFixed(2));
        }  
    function areaCuadrado (lado){
       return parseFloat((lado * lado).toFixed(2));
    }
console.groupEnd();

// Cálcuclos del triángulo
console.group("Triángulo");;
    function perimetroTriangulo(lado1, lado2, base){
        return console.log("El perímetro del triángulo es: " + parseFloat((lado1 + lado2 + base).toFixed(2)) + " cm");
    }
    function areaTriangulo (base, altura){
        return  console.log("El área del Triángulo es: " + parseFloat(((base*altura)/2).toFixed(2)) + " cm^2");
    }           
console.groupEnd();

// Cálculos del círculo
console.group("Círculo");
    // Radio
        // const radioCirculo = 4;
    // Diámetro
    function diametroCirculo(radio){
        return console.log("El diámetro del círculo es: " + parseFloat((radio * 2).toFixed(2)) + " cm")
    }    
    // Pi
        const pi = Math.PI;
    // Circunferencia
    function circunferenciaCirculo (radio){
        const diametro = diametroCirculo(radio);
        return  console.log("La circunferencia del círculo es: " + parseFloat((diametro * pi).toFixed(2)) + " cm");
    }
    // Área 
    function areaCirculo(radio){
        return console.log("El área del círculo es: " + parseFloat(((radio * radio) * pi).toFixed(2)) + " cm^2"); 
    } 
console.groupEnd();

// Interacción con HTML 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(("El perímetro del cuadrado es: " + perimetro + " cm"));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm^2");
}