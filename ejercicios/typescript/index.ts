let muted: boolean = true;
muted = false;

let age = 6
let numerdador = 42;
let denominador: number = age;
let resultado = numerdador / denominador;


let nombre: string = 'daniel'
let saludo = `hola, me llamo ${nombre}`

console.log(saludo)

//arreglos

let people: string[] = [];
people = ['juna', 'daniel'];
// error: people.push(5)

let peopleAndNumbers: Array < string | number > = [] //dos ytipos de arreglo
peopleAndNumbers.push(5);
peopleAndNumbers.push('casa');


//enum

enum Color {
  Rojo ="Rojo",
  Verde = "Verde",
  Azul="Azul"
}

let colorFav: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFav}`)


//any

let comodin: any = "joker";
comodin = { type: 'Wildcard' }; //puede ser cualquier cosa

//object

let myObject: object = { type: 'Wildcard' }; 

//funciones


function add(a: number, b: number): number {
  return a + b
}

const sumaFuncion = add(4,9)

function createAdder(a: number): (number) => number {
  return function(b: number){
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName (name: string, lastName: string = "Smith") : string { //el smith es por omision (caso que no tenga lastname sino agrego el ?)
  return `nombre completo es ${name} ${lastName}`
}

const daniel = fullName('Juan', 'rios');
// 

// interfaces -> definen la forma exacta de un objeto


interface Rectangulo { //tipo
  ancho: number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo,
}

function area (r: Rectangulo): number {
  return r.alto * r.ancho
}

const areaRect = area (rect)
console.log(`el area del rectangulo es ${areaRect}`)


rect.toString = function(){
  return `un rectangulo ${this.color}`
}

console.log(rect.toString())

//clases