//El método apply en JavaScript se utiliza para invocar una función y establecer su contexto y argumentos utilizando un array.

function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

const numeros = [2, 4, 6, 8, 10];

const resultado = sumar.apply(null, numeros);
console.log(resultado); // Imprime 30

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona = new Persona("Juan");
const otroObjeto = {
  nombre: "María",
};

persona.saludar.apply(otroObjeto); // Imprime "Hola, soy María"

//ejemplo 3 gestion de usuarios

function agregarUsuario(nombre, edad, ...otrosDatos) {
  console.log(`Usuario agregado: ${nombre}`);
  console.log(`Edad: ${edad}`);

  if (otrosDatos.length > 0) {
    console.log("Otros datos:");
    otrosDatos.forEach((dato) => console.log(dato));
  }
}

const datosUsuario = [
  "John Doe",
  "15",
  "john.doe@example.com",
  "555-1234",
  "Ciudad de residencia",
];

agregarUsuario.apply(null, datosUsuario);

//ejemplo con this y contexto

const persona2 = {
  nombre: "John",
  apellido: "Doe",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

const otraPersona = {
  nombre: "Jane",
  apellido: "Smith",
};

persona2.saludar.apply(otraPersona);
persona2.saludar();
