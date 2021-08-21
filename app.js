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


//EJEMPLOS CON map
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

const wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1


const myMap = new Map()

const keyString = 'a string'
const keyObj    = {}
const keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}


const myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

const otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"

const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value)
  })
  // 0 = zero
  // 1 = one

  const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]

const original = new Map([
    [1, 'one']
  ])
  
  const clone = new Map(original)
  
  console.log(clone.get(1))       // one
  console.log(original === clone) // false (useful for shallow comparison)

  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  const merged = new Map([...first, ...second])
  
  console.log(merged.get(1)) // uno
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three

  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge maps with an array. The last repeated key wins.
  const merged = new Map([...first, ...second, [1, 'eins']])
  
  console.log(merged.get(1)) // eins
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three

//EJEMPLOS DE MAP 2


var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]

var kvArray = [{clave:1, valor:10},
    {clave:2, valor:20},
    {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
var rObj = {};
rObj[obj.clave] = obj.valor;
return rObj;
});

// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],

// kvArray sigue siendo:
// [{clave:1, valor:10},
//  {clave:2, valor:20},
//  {clave:3, valor: 30}]

var numeros = [1, 4, 9];
var dobles  = numeros.map(function(num) {
  return num * 2;
});

// dobles es ahora [2, 8, 18]
// numeros sigue siendo [1, 4, 9]

var map = Array.prototype.map;
var valores = map.call('Hello World', function(char) { return char.charCodeAt(0); });
// valores ahora tiene [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
  return obj.value;
});

var str = '12345';
[].map.call(str, function(x) {
  return x;
}).reverse().join('');

// Salida: '54321'
// Bonus: usa'===' para probar si la cadena original era un palindromo


// Considera:
['1', '2', '3'].map(parseInt);
// Mientras uno esperaría [1, 2, 3]
// en realidad se obtiene [1, NaN, NaN]

// parseInt se usa comúnmente con un argumento, pero toma dos.
// El primero es una expresión y el segundo el radix.
// a la función callback, Array.prototype.map pasa 3 argumentos:
// el elemento, el índice y el array.
// El tercer argumento es ignorado por parseInt, pero no el segundo,
// de ahí la posible confusión. Véase el artículo del blog para más detalles

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// El resultado es un arreglo de números (como se esperaba)

// Un modo más simple de lograr lo de arriba, mientras de evita el "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

    Array.prototype.map = function(callback, thisArg) {
  
      var T, A, k;
  
      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }
  
      // 1. Let O be the result of calling ToObject passing the |this|
      //    value as the argument.
      var O = Object(this);
  
      // 2. Let lenValue be the result of calling the Get internal
      //    method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      // 6. Let A be a new array created as if by the expression new Array(len)
      //    where Array is the standard built-in constructor with that name and
      //    len is the value of len.
      A = new Array(len);
  
      // 7. Let k be 0
      k = 0;
  
      // 8. Repeat, while k < len
      while (k < len) {
  
        var kValue, mappedValue;
  
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
  
          // i. Let kValue be the result of calling the Get internal
          //    method of O with argument Pk.
          kValue = O[k];
  
          // ii. Let mappedValue be the result of calling the Call internal
          //     method of callback with T as the this value and argument
          //     list containing kValue, k, and O.
          mappedValue = callback.call(T, kValue, k, O);
  
          // iii. Call the DefineOwnProperty internal method of A with arguments
          // Pk, Property Descriptor
          // { Value: mappedValue,
          //   Writable: true,
          //   Enumerable: true,
          //   Configurable: true },
          // and false.
  
          // In browsers that support Object.defineProperty, use the following:
          // Object.defineProperty(A, k, {
          //   value: mappedValue,
          //   writable: true,
          //   enumerable: true,
          //   configurable: true
          // });
  
          // For best browser support, use the following:
          A[k] = mappedValue;
        }
        // d. Increase k by 1.
        k++;
      }
  
      // 9. return A
      return A;
    };
  }
  

