/// un clousure es una función que tiene acceso a variables fuera de su propio ámbito, incluso después de que la función haya sido ejecutada. Esto significa que una función puede "recordar" y acceder a las variables que estaban disponibles en el momento de su creación.

function incrementar() {
  let contador = 0;

  function aumentar() {
    contador++;
    console.log(contador);
  }

  return aumentar;
}

const contadorIncrementado = incrementar();
contadorIncrementado();

// Ejemplo 2

function crearContador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  function resetear() {
    contador = 0;
    console.log("Contador reiniciado");
  }

  return {
    incrementar,
    resetear,
  };
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
contador.resetear();
contador.incrementar();

//Ejemplo 2: Gestión de datos privados

// Imagina que estás desarrollando una aplicación que maneja información confidencial, y quieres asegurarte de que ciertos datos solo sean accesibles a través de funciones específicas. Puedes utilizar un closure para encapsular esos datos y proporcionar métodos de acceso controlado. Observa el siguiente código:

function crearUsuario(nombre, edad) {
  let datosPrivados = {
    nombre,
    edad,
    obtenerNombreCompleto() {
      return `${datosPrivados.nombre} Smith`;
    },
  };

  function obtenerEdad() {
    return datosPrivados.edad;
  }

  return {
    obtenerEdad,
    obtenerNombreCompleto: datosPrivados.obtenerNombreCompleto,
  };
}

const usuario = crearUsuario("John", 30);
console.log(usuario.obtenerEdad()); // Imprime 30
console.log(usuario.obtenerNombreCompleto()); // Imprime "John Smith"
console.log(usuario.nombre); // Imprime undefined (no se puede acceder directamente)

//Solucion con bind
function crearUsuario(nombre, edad) {
  let datosPrivados = {
    nombre,
    edad,
    obtenerNombreCompleto() {
      return `${this.nombre} Smith`;
    },
  };

  function obtenerEdad() {
    return datosPrivados.edad;
  }

  return {
    obtenerEdad,
    obtenerNombreCompleto:
      datosPrivados.obtenerNombreCompleto.bind(datosPrivados),
  };
}

const usuarioBind = crearUsuario("John", 30);
console.log(usuarioBind.obtenerEdad()); // Imprime 30
console.log(usuarioBind.obtenerNombreCompleto()); // Imprime "John Smith"
console.log(usuarioBind.nombre); //
