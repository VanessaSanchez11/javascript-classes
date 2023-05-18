//  BIND es un método que permite enlazar una función a un objeto específico, de modo que cuando la función se ejecute, el "this" dentro de esa función se refiera al objeto enlazado.

// Importancia: BIND es útil cuando deseas tener un control explícito sobre el contexto (valor de "this") en el que se ejecuta una función. Te permite enlazar una función a un objeto particular, lo que es especialmente útil en situaciones como la creación de métodos vinculados a objetos.

// Uso: El método BIND se utiliza invocando la función y pasando como argumento el objeto al que se desea enlazar. Puedes almacenar el resultado en una variable y luego llamar a la función enlazada cuando sea necesario.

const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

const saludarPersona = persona.saludar.bind(persona);
saludarPersona(); // Imprime "Hola, soy Juan"

function Tarea(nombre) {
  this.nombre = nombre;
  this.completada = false;
}

Tarea.prototype.completar = function () {
  this.completada = true;
  console.log(`Tarea "${this.nombre}" completada.`);
};

const tarea1 = new Tarea("Hacer ejercicio");
const tarea2 = new Tarea("Comprar víveres");

const completarTarea1 = tarea1.completar.bind(tarea1);
completarTarea1(); // Imprime "Tarea "Hacer ejercicio" completada."

console.log(tarea1); // { nombre: "Hacer ejercicio", completada: true }
console.log(tarea2); // { nombre: "Comprar víveres", completada: false }

//ejemplo 3

// Ejemplo de la vida real:
// Imagina que estás construyendo una aplicación de carrito de compras en línea. Tienes una lista de productos y quieres permitir que los usuarios agreguen productos al carrito. Cada vez que un usuario hace clic en el botón "Agregar al carrito" de un producto, debes ejecutar una función que procese la acción. Aquí es donde bind puede ser útil.

const boton = document.querySelector("#miBoton");
const objeto = {
  nombre: "Zapatos de cuero",
  manejarClick: function () {
    console.log(`Hiciste clic en compra de ${this.nombre}`);
  },
};

boton.addEventListener("click", objeto.manejarClick.bind(objeto));

// En resumen, bind es importante porque te permite establecer el contexto adecuado para una función en JavaScript, evitando comportamientos inesperados y errores al controlar el valor de this. Al enlazar una función a un objeto específico, puedes asegurarte de que this haga referencia al objeto deseado y crear funciones vinculadas que conserven el contexto original para su reutilización.
