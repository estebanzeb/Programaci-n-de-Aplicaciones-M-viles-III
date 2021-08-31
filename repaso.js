/* insertar tres numero e imporimir el menor el medio y el mayor
los tres lados de un triangulo, imprimir si son Isoceles, equilatero o escaleno
generar la serie0,1,1,2,3,5,8,13*/


/*const result = (lado1=prompt("Ingrese el primer lado"), lado2=prompt("Ingrese el segundo lado"), lado3=prompt("Ingrese el tercer lado"))=>
{
    if (lado1==lado2 && lado1==lado3 && lado2==lado3){
        console.log("El triangulo es equilatero")
    }else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log("El triángulo es escaleno")
    }else{
        console.log("El triangulo es isosceles")
    }
}

 
    

console.log(result());*/

let series=[0,1];

for (let i = 2; i <= 8; i++) {

    series.push(series[i-1] + series[i-2]);

 }

console.log(series);

