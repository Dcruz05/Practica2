function greet() {
    console.log("Hello")
}
greet();
console.log(greet)

let logGreeting = (fn) =>{
    fn();
}
logGreeting(greet);

let greetMe = function() {
    console.log("Hello from the function expression");
}
greetMe();

let saludo = (nombre, tratamiento) => {
    console.log(`Hola ${tratamiento} ${nombre}`);
}
saludo("Miguel", "Sr.");

let cuadrado = numero => {  return numero*numero;   } //cuando solo tenemos un parametro podemos ahorrar los parenesis
console.log(cuadrado(5));

cuadrado = numero => numero*numero; // Cuando solo es una linea tambien podemos no usar {}
console.log(cuadrado(7));