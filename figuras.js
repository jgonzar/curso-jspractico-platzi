// Cálculos del cuadrado
console.group("Cuadrado");
    const ladoCuadrado = 5;
        console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

    const perimetroCuadrado = parseFloat((ladoCuadrado * 4 ).toFixed(2));
        console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");
        
    const areaCuadrado = parseFloat((ladoCuadrado * ladoCuadrado).toFixed(2));
        console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Cálcuclos del triángulo
console.group("Triángulo");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
        console.log(
            "Los lados del Triángulo miden: " 
            + ladoTriangulo1 + " cm, " 
            + ladoTriangulo2 + " cm" 
            + " y " 
            + baseTriangulo 
            + " cm"
        );
    const alturaTriangulo = 5.5;
        console.log("La altura del Triángulo es: " + alturaTriangulo + " cm");
    
    const perimetroTriangulo = parseFloat((ladoTriangulo1 + ladoTriangulo2 + baseTriangulo).toFixed(2));
        console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");
    const areaTriangulo = parseFloat(((baseTriangulo * alturaTriangulo)/2).toFixed(2));
        console.log("El área del triángulo es: " + areaTriangulo + " cm^2");
            
console.groupEnd();

// Cálculos del círculo
console.group("Círculo");
    // Radio
        const radioCirculo = 4;
    // Diámetro
        const diametroCirculo = parseFloat((radioCirculo * 2).toFixed(2));
        console.log("El diámetro del círculo es: " + diametroCirculo + " cm");     
    // Pi
        const pi = Math.PI;
    // Circunferencia
        const circunferenciaCirculo = parseFloat((diametroCirculo * pi).toFixed(2));
            console.log("La circunferencia del círculo es: " + circunferenciaCirculo + " cm"); 
    // Área 
        const areaCirculo = parseFloat(((radioCirculo * radioCirculo) * pi).toFixed(2));
            console.log("El área del círculo es: " + areaCirculo + " cm^2"); 
console.groupEnd();