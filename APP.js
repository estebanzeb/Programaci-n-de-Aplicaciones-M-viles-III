'use strict'

/*numer=3;
let lavariable=5;

if (numero>5){
    let suma=0;
}

console.log(suma);*/


/*const mayor = (numero1=prompt("Ingrese el primer numero"), numero2=prompt("Ingrese el segundo numero"), numero3=prompt("Ingrese el tercer numero")) =>
{
    if (numero1>numero2 && numero1>numero3){
        return numero1
    }else if (numero2>numero1 && numero2>numero3){
        return numero2
    }else{
        return numero3

    }
}

//Operadores Logicos
//Y=&& O=|| !
//Operadores racianales
//<,>,<>,==,!=


console.log("El numero mayor de tres numeros es: " + mayor());*/


let ob ={

    date:[{
        Name:"Esteban Quintero Yepes",
        CC: 1020490155,
        AGE: 17, 
        EstadoCivil: "Soltero",
        mayor:(AGE)=>AGE>=18
    },
    { 
        Name:"Esteban Quintero Yepes",
        CC: 1020490155,
        AGE: 22, 
        EstadoCivil: "Soltero",
        mayor:(AGE)=>AGE>=18
    }   
    ]
    
}

//console.log(ob[date].mayor());
  ob.date.map((e)=>{
      console.log(e.mayor(e.AGE));
  });

  
  let ob2 ={

    date:[{
        Name:"Esteban Quintero Yepes",
        CC: 1020490155,
        AGE: 17, 
        EstadoCivil: "Soltero",
        mayor1:()=>this.AGE>=18
    },
    { 
        Name:"Esteban Quintero Yepes",
        CC: 1020490155,
        AGE: 22, 
        EstadoCivil: "Soltero",
        mayor2:()=>this.AGE>=18
    }     
    ]
    
}

//console.log(ob[date].mayor());
  ob2.date.map((e)=>{
      console.log(e.mayor1());
  });
  ob2.date.map((e)=>{
    console.log(e.mayor2());
});


//1. Arreglo
let cajonera=["Carne","Queso","Lechuga"];
/*console.log(cajonera[0]);*/

let cajonera2=Array("Carne","Queso","Leche");


//2. objeto
let bolsa={
    Proteinas:["Carne","Queso"],
    Vegetales:["Lechuga","Tomate"],
    Acompañante:["Salsa"],
    Carboidratos:["Pan"],
};

/*console.log(bolsa.Proteinas);*/

let hoteles=[
    {id:"hot001",nombre:"Hilton Garden", region:"caribe",costoNoche:250000,disponible:true,estrellas:5},
    {id:"hot002",nombre:"Hotel madre selva", region:"Amazonas",costoNoche:85000,disponible:true,estrellas:3},
    {id:"hot003",nombre:"Mercure Santa marta", region:"caribe",costoNoche:227000,disponible:true,estrellas:4},
    {id:"hot004",nombre:"Hotel Nuquimar", region:"pacifico",costoNoche:100000,disponible:true,estrellas:3},
    {id:"hot005",nombre:"Cabaña la marea", region:"pacifico",costoNoche:15000,disponible:true,estrellas:3},
    {id:"hot006",nombre:"Reserva natural Tanimboca", region:"Amazonas",costoNoche:30000,disponible:true,estrellas:3}
];

//Cree un nuevo arreglo con los hoteles de la region caribe

let resultado;
//Esta recorriendo la variable HOTELES
//BUSCAR VARIOS

/*resultado = hoteles.filter(function(hotel){       
    return (hotel.region=="andina");
});
console.log(resultado);*/


//Esta recorriendo la variable HOTELES
//BUSCA UNO EN ESPECIFIC
/*resultado = hoteles.find(function(hotel){
    return (hotel.id=="hot005");
   
});

console.log(resultado);*/

//BUSCAR SI ESTA, SOLO DEVUELVE (TRUE , FALSE)
/*resultado = hoteles.some(function(hotel){
    return (hotel.id=="558");
});

console.log(resultado);*/

//BUSCA Y ACUMULA PARA PORDER SUMAR

/*resultado = hoteles.reduce(function(acumulador,hotel){
    return (hotel.estrellas+acumulador);
},0);

console.log(resultado)*/

//Esta recorriendo la variable HOTELES
/*let resultado = hoteles.filter((hotel)=>hotel.region=="caribe");

console.log(resultado);*/

let departamentos=Array(
    {nombre:"Antioquia",capital:"Medellín",municipio:125,region:"Andina"},
    {nombre:"Amazonas",capital:"Leticia",municipio:2,region:"Amazonica"},
    {nombre:"Atlantico",capital:"Barranquilla",municipio:23,region:"Caribe"},
    {nombre:"Caldas",capital:"Manizales",municipio:27,region:"Andina"},
    {nombre:"Casanare",capital:"Yopal",municipio:19,region:"Orinoquía"},
    {nombre:"Caquetá",capital:"Florencia",municipio:16,region:"Amazonica"}
);

resultado = departamentos.filter(function(departamento){       
    return (departamento.region=="Andina");
});
console.log(resultado);


resultado = departamentos.find(function(departamento){       
    return (departamento.municipio=="27");
});
console.log(resultado);

resultado = departamentos.filter(function(departamento){       
    return (departamento.municipio>"20");
});
console.log(resultado);

resultado = departamentos.some(function(departamento){       
    return (departamento.capital=="Yopal");
});
console.log(resultado);

resultado = departamentos.reduce(function(acumulador,departamento){
    return (departamento.municipio+acumulador);
},0); //el numero desde donde empieza el contador

console.log(resultado)

let resultado = hoteles.filter((hotel)=>hotel.region=="caribe");

console.log(resultado);