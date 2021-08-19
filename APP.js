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
