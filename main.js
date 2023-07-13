//alert();

const salFijo = 8000; //Salario minimo fijo de los vendedores
const comision = 500; //Comision por cada venta
const porcentaje = 0.05; //Porcentaje del valor total de las ventas que se les da a los vendedores
let vendedores = Number(prompt("Ingrese la cantidad de vendedores"));
let cantVentas;
let valorVentas;
let salario;
let max = 0;
let min = 1000000;
let suma = 0;
let opcion;

/*function calcularSalario(cantV, valorV){
    return salFijo + comision*cantV + porcentaje*valorV;
}

function ingresarCantVentas(a){
    return Number(prompt("Ingrese el total de ventas del vendedor " + a + " en el mes"));
}

function ingresarValorVentas(b){
    return Number(prompt("Ingrese el valor total de las ventas del vendedor " + b + " en el mes"));
}*/

//Paso las funciones de arriba a funciones flecha 

const calcularSalario = (cantV, valorV) => {return salFijo + comision*cantV + porcentaje*valorV};

const ingresarCantVentas = (a) => {return Number(prompt("Ingrese el total de ventas del vendedor " + a + " en el mes"))};

const ingresarValorVentas = (b) => {return Number(prompt("Ingrese el valor total de las ventas del vendedor " + b + " en el mes"))};


for (let i=1; i<=vendedores; i+=1){
    cantVentas = ingresarCantVentas(i);
    valorVentas = ingresarValorVentas(i)
    salario = calcularSalario(cantVentas, valorVentas);
    console.log("Vendedor " + i);
    console.log("Cantidad de ventas: " + cantVentas);
    console.log("Valor total: " + valorVentas);
    console.log("Salario: " + salario);
    console.log("-----------------------------");
    if (salario > max){
        max = salario;
    }
    if (salario < min){
        min = salario;
    }
    suma += salario;
}

opcion = Number(prompt("Opciones:   1.Mayor salario   2.Menor salario   3.Promedio   4.Salir   Ingrese una opcion"));
while (opcion != 4){
    switch (opcion){
        case 1: console.log("El salario mas alto del mes fue de " + max);
            break;
        case 2: console.log("El salario mas bajo del mes fue de " + min);
            break;
        case 3: console.log("El promedio de los salarios del mes fue de " + Number(suma/vendedores));
            break;
        default: alert("Ingrese una opcion valida");
            break;
    }
    opcion = Number(prompt("Opciones: 1.Mayor salario  2.Menor salario  3.Promedio  4.Salir ----- Ingrese una opcion"));
}