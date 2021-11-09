// Cálculos del cuadrado
console.group("Cuadrado");
    function perimetroCuadrado(lado){
        return console.log("El perímetro del cuadrado es: " + parseFloat((lado * 4).toFixed(2)) + " cm");
        }  
    function areaCuadrado (lado){
       return console.log("El área del cuadrado es: " + parseFloat((lado * lado).toFixed(2)) + " cm^2");
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