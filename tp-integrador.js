// Integrantes del grupo : Viale Pamela   
// node tp-integrador.js

//--------------------- Trabajo Práctico Integrador
//---------------------- Introducción a Javascript 
//--------------------Sistema de Gestión de Biblioteca

// Introducción:
// El siguiente trabajo práctico integrador está diseñado para evaluar tus conocimientos en los fundamentos de JavaScript a través de la implementación de un conjunto de tareas que deben ser resueltas en un solo programa. Asegúrate de aplicar las buenas prácticas y estándares de nomenclatura, además de seguir las instrucciones dadas.
// Objetivo:
// Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales de JavaScript vistos en el módulo.
// Requerimientos

//---------------------------- 1. Estructura de Datos

// Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades: 
// id (número)
// título (string), 
// autor (string), 
// año (número), 
// género (string), 
// disponible (booleano).

// Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).

//Creo un array con los datos de 10 libros, elegí algunos de los libros de Stephen King, y guardé los datos de cada uno en en el array Libros.
// Luego cree un array de usuarios con los nombres de mis hermanos, colocando sus datos.

const libros = [
    { id: 1, titulo: "It", autor: "Stephen King", año: 1986, genero: "Terror", disponible: true },
    { id: 2, titulo: "Carrie", autor: "Stephen King", año: 1974, genero: "Terror", disponible: true },
    { id: 3, titulo: "El Resplandor", autor: "Stephen King", año: 1977, genero: "Terror", disponible: false },
    { id: 4, titulo: "Misery", autor: "Stephen King", año: 1987, genero: "Suspenso", disponible: true },
    { id: 5, titulo: "Cementerio de Animales", autor: "Stephen King", año: 1983, genero: "Terror", disponible: true },
    { id: 6, titulo: "Doctor Sueño", autor: "Stephen King", año: 2013, genero: "Terror", disponible: true },
    { id: 7, titulo: "La Torre Oscura", autor: "Stephen King", año: 1982, genero: "Fantasía", disponible: false },
    { id: 8, titulo: "La Milla Verde", autor: "Stephen King", año: 1996, genero: "Drama", disponible: true },
    { id: 9, titulo: "Revival", autor: "Stephen King", año: 2014, genero: "Horror", disponible: true },
    { id: 10, titulo: "Insomnia", autor: "Stephen King", año: 1994, genero: "Terror", disponible: true }
  ]

  const usuarios = [
    { id: 1, nombre: "Pamela Viale", email: "pamela.viale@gmail.com", librosPrestados: [3] },
    { id: 2, nombre: "Dafne Viale", email: "dafne.viale@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Barbara Viale", email: "barbara.viale@gmail.com", librosPrestados: [7] },
    { id: 4, nombre: "Ivan Viale", email: "ivan.viale@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Liza Viale", email: "liza.viale@gmail.com", librosPrestados: [2, 5] }
  ]

  //----------------------------  2. Funciones de Gestión de Libros

  // A. Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros. (push)
  
  // B. Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. (filter)
  
  // C. Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola. (for anidado)
  
  // D. Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. (findIndex)
  


// A. Función para agregar un nuevo libro:

// A la primer función le paso parametros para poder agregar libros nuevos con los datos requeridos, que luego pasaré por argumentos para que se agreguen en un nuevo array. Uso el método push para agregar cada nuevo libro al final del array.

const agregarLibro = (id, titulo, autor, anio, genero) => {
  const nuevoLibro = { id, titulo, autor, año: anio, genero, disponible: true }
  libros.push(nuevoLibro)
  console.log(`Libro agregado: "${titulo}"`)
}

agregarLibro(11, "La cúpula", "Stephen King", 2009, "Terror")
 console.log(libros)



// B. Buscar libro

// Uso el método .filter() recorre cada libro y compara el campo indicado con el valor ingresado.
// Uso .toLowerCase() para convertir tanto el campo del libro como el valor buscado a minúsculas, y así evitar errores por diferencias entre mayúsculas y minúsculas.
// Finalmente, con .includes() verifico si el texto buscado está contenido dentro del campo del libro.
// Si hay coincidencias, se muestran en consola.

const buscarLibro = (criterio, valor) => {
  const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
  console.log("Resultado de búsqueda:", resultado);
};
buscarLibro("titulo", "It")



// C. Ordenar libros 

//En esta función uso el parámetro criterio para definir por qué propiedad se van a ordenar los libros (por ejemplo, por "año", "titulo", etc.).
// Utilizo el bubble sort, que compara elementos de a pares y los va intercambiando de lugar si no están en orden. Esto se repite hasta que todo el array queda ordenado.
// La comparación se hace con libros[j][criterio] > libros[j + 1][criterio], y si es verdadera, se hace el intercambio.
// Al finalizar,  muestra por consola el listado de libros ordenado según el criterio elegido.


const ordenarLibros = (criterio) => {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        let temp = libros[j];
        libros[j] = libros[j + 1]
        libros[j + 1] = temp;
      }
    }
  }
  console.log(`Libros ordenados por ${criterio}:`, libros)
};

ordenarLibros("año")



// D. Borrar libro

//Esta función permite eliminar un libro del array de libros usando su id como referencia.
// Primero, uso .findIndex() para encontrar la posición (índice) del libro que coincide con el id dado.
// Si se encuentra (index !== -1), uso .splice() para eliminar ese libro del array y mostrar en consola cuál fue eliminado.
 // Si no se encuentra, se muestra un mensaje diciendo que no se encontró el libro.

const borrarLibro = (id) => {
  const index = libros.findIndex(libro => libro.id === id)
  if (index !== -1) {
    const borrado = libros.splice(index, 1)
    console.log(`Libro eliminado:`, borrado)
  } else {
    console.log("Libro no encontrado.")
  }
};

borrarLibro(4)


// ---------------------------- 3. Gestión de Usuarios

// A.Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. (push agrega una nuevo elemnto al array, al final)

// B.Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios (recorro array y muestro resultado, uso filter)

// C.Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.(Find busca y devuelve el primer elemento del array que cumpla una condición 
 
// D.Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado. (findIndex,devuelve el índice del primer elemento que cumpla con una condición. Si no encuentra ninguno, devuelve -1, tambien uso splice para eliminar un elemneto) 


// A. Registrar usuario

// Uso como parámetros el nombre y el email del nuevo usuario.
// Creo un objeto llamado nuevoUsuario con una id que se calcula automáticamente sumando 1 a la cantidad actual de usuarios (usuarios.length + 1). También le asigno un array vacío en librosPrestados, ya que el usuario recién registrado no tiene libros aún.
// Luego se agrega ese nuevo usuario al array usuarios con .push() y se muestra un mensaje en consola confirmando el registro.
// Se puede visualizar el listado completo de usuarios registrados con console.log("Usuarios registrados:", usuarios).

const registrarUsuario = (nombre, email) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log(`Usuario registrado: ${nombre}`)
}


registrarUsuario("Rodrigo", "rodrigo.viale@gmail.com")
console.log("Usuarios registrados:", usuarios)


// B. Mostrar todos los usuarios

// uso parametros para que pueda buscarlos por los criterios que pase como argumentos. .filter() para recorrer el array y encontrar coincidencias.
// uso toLowerCase para que pueda detectar el nombre ya sea escrito en mayuscula o miniscula
// //Si el campo no es string (como en el caso del id que es numérico), se compara directamente con ===.
// Al final, si encuentra resultados, los muestra con console.log("Usuarios encontrados:", resultados), y si no, muestra un mensaje indicando que no hubo coincidencias.


const buscarUsuarios = (criterio, valor) => {
  const resultados = usuarios.filter(user => {
    const campo = user[criterio]

    if (typeof campo === "string") {
      return campo.toLowerCase().includes(valor.toLowerCase())
    }

    return campo === valor
  });

  if (resultados.length > 0) {
    console.log("Usuarios encontrados:", resultados)
  } else {
    console.log("No se encontraron usuarios con ese criterio.")
  }
}


buscarUsuarios("nombre", "juan")          
buscarUsuarios("email", "dafne.viale@gmail.com")
buscarUsuarios("id", 3)


// C. Buscar usuario por mail

// Utiliza .find() para recorrer el array y detenerse en el primer usuario cuyo email coincida exactamente con el que se pasó como parámetro.
// Para evitar problemas con mayúsculas o minúsculas, se convierte ambos emails a minúsculas usando .toLowerCase() antes de compararlos.
// Si encuentra un usuario con ese email, lo muestra con console.log("Usuario encontrado:", usuario); si no lo encuentra, muestra "No encontrado" usando el operador lógico ||.

const buscarUsuario = (email) => {
  const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
  console.log("Usuario encontrado:", usuario || "No encontrado");
};

buscarUsuario("liza.viale@gmail.com")
buscarUsuario("ivan.viale@gmail.com")



// D. Borrar usuario

// u busca cada item de usuario
// findIndex() para encontrar el índice del usuario que coincida exactamente con el nombre y el email proporcionados como parámetros.
// Si encuentra ese índice (!== -1), significa que el usuario existe, entonces lo elimina del array usando .splice() y muestra el usuario eliminado por consola.
// Si no lo encuentra, muestra el mensaje "Usuario no encontrado."

const borrarUsuario = (nombre, email) => {
  const index = usuarios.findIndex(u => u.nombre === nombre && u.email === email);
  if (index !== -1) {
    const eliminado = usuarios.splice(index, 1)
    console.log("Usuario eliminado:", eliminado)
  } else {
    console.log("Usuario no encontrado.")
  }
}

borrarUsuario("Pamela Viale", "pamela.viale@gmail.com")


//---------------------------- 4. Sistema de Préstamos

//A.Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

// B.Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario. (cambia el booleano si el libro fue devuelto)


const prestarLibro = (idLibro, idUsuario) => {
  const libro = libros.find(l => l.id === idLibro)
  const usuario = usuarios.find(u => u.id === idUsuario)
// Primero busca el libro con idLibro dentro del array libros y busca al usuario.
  if (libro && libro.disponible && usuario) {
    //verifica que el libro exista, que este disponible y que el usuario tambien exista
    libro.disponible = false;
    usuario.librosPrestados.push(libro.id);
    console.log(`"${libro.titulo}" fue prestado a ${usuario.nombre}`)
    //si esta todo ok cambia el libro de disponible a false, y agregar el id del libro al array librosPrestados del usuario, mostrando que ese libro fue prestado al usuario
  } else {
    console.log("No se puede prestar el libro.")
  }//si la condición no se cumple muestra un mensaje
}
 //probamos diferentes opciones
prestarLibro(4,3) // prestamos Misery a Barbara
prestarLibro(2,5) // Prestamos Carrie A Liza
prestarLibro(2,4)// Carrie ya lo prestamos a liza por eso no podemos volver a prestarlo

const devolverLibro = (idLibro, idUsuario) => {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario)

  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log(`"${libro.titulo}" fue devuelto por ${usuario.nombre}`)
  } else {
    console.log("No se puede devolver el libro.")
  }
}

//para devolver el libro, busca el usuario y el libro por el id,filtra el libros prestados del usurio para eliminar el id, y muestra el mensaje en consola. En caso de que no cumpla la condición muestra el mensaje de que no se puede devolver.

devolverLibro(4,3)// Misery fue devuelto por barbara


//---------------------------- 5. Reportes

// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
//Cantidad total de libros. length para longitud de array/string
//Cantidad de libros prestados.//filter
//Cantidad de libros por género. //reduce y tengo que acumular para que los sume por genero
//Libro más antiguo y más nuevo // reduce , segun el año


const generarReporteLibros = () => {
  const totalLibros = libros.length
  //aca tenemos la cantidad total de libros

  const librosPrestados = libros.filter(libro => !libro.disponible).length;
  //con filter nos quedamos con los libros que no estan disponibles y con length contamos cuantos son

  const cantidadPorGenero = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1
    return acc
  },)

// con reduce contamos cuantos libros hay por genero,acc acumula, osea va guardando los generos, acc[libro.genero] busca el contador actual del género.

// Si no hay ninguno (undefined), empieza en 0.Lo incrementamos de a 1 cada vez que aparece ese género.

  const libroMasAntiguo = libros.reduce((antiguo, actual) =>
    actual.año < antiguo.año ? actual : antiguo
  );

  const libroMasNuevo = libros.reduce((nuevo, actual) =>
    actual.año > nuevo.año ? actual : nuevo
  );

  //.reduce() para encontrar el libro con el año más bajo (el más antiguo), o el mas nuevo. Compara el año de cada libro con el más antiguo encontrado hasta ahora.


  console.log("Reporte de Libros:")
  console.log("Total de libros:", totalLibros)
  console.log("Libros prestados:", librosPrestados) // de 10 libros hay 2 prestados
  console.log("Cantidad de libros por género:", cantidadPorGenero);
  console.log("Libro más antiguo:", libroMasAntiguo.titulo, `(${libroMasAntiguo.año})`)
  console.log("Libro más nuevo:", libroMasNuevo.titulo, `(${libroMasNuevo.año})`)
}

generarReporteLibros()


//---------------------------- 6. Identificación Avanzada de libros

//Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante. () armar un array que solo contenga los caracteres permitidos, letras en mayuscula y minuscula y vocales con acento, hacer la consulta en relacion a ese array


const librosConPalabrasEnTitulo = () => {
  const caracteresPermitidos = [
    ...'abcdefghijklmnopqrstuvwxyz',
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ...'áéíóúÁÉÍÓÚ',
    ' '
  ] // colocamos cuales son los caracteres que consideramos permitidos

  const resultado = libros.filter(libro => {
    const titulo = libro.titulo.trim() // eliminamos espacios al inicio y fin
    const palabras = titulo.split(/\s+/) // dividimos cada titulo en palabras

    if (palabras.length <= 1) return false // excluyo si tiene una palabra o menos

    // verifico que los caracteres seas los permitidos
    for (let i = 0; i < titulo.length; i++) {
      const caracter = titulo[i]
      if (!caracteresPermitidos.includes(caracter)) {
        return false; // si hay algún caracter no permitido, excluimos el libro
      }
    }

    return true
  })

  const titulos = resultado.map(libro => libro.titulo)
  console.log("Títulos válidos con más de una palabra y sin caracteres especiales ni números:")
  console.log(titulos)
}


librosConPalabrasEnTitulo()


//----------------------------7. Cálculos Estadísticos

// // Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// // Obtener un array con los años de publicación de todos los libros.
// // Calcular el promedio de los años de publicación.
// // Encontrar el año de publicación más frecuente.
// // Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()


const calcularEstadisticas = () => {
// años de publicación de todos los libros
  const años = libros.map(libro => libro.año)

// Calculo el promedio de los años, use reduce para sumar los años, en año el año del libro, total es el acumulador y o es el valor con el que inicia. Con el toFixed lo dejo con 2 decimales.

  const suma = años.reduce((total, año) => total + año, 0)
  const promedio = (suma / años.length).toFixed(2)

// Encontrar el año más frecuente de publicacion
  const frecuencias = {}
  años.forEach(año => {
    frecuencias[año] = (frecuencias[año] || 0) + 1
  });
  const añoMasFrecuente = Object.entries(frecuencias).reduce((a, b) => b[1] > a[1] ? b : a)[0]

// Calcular diferencia entre el más antiguo y el más nuevo
  const añoMasAntiguo = Math.min(...años)
  const añoMasNuevo = Math.max(...años)
  const diferencia = añoMasNuevo - añoMasAntiguo

// Math.min y Math.max para encontrar el año más antiguo y más reciente, usando el operador ... para expandir el array

// Mostrar resultados
  console.log("Años de publicación:", años)
  console.log("Promedio de publicación:", promedio)
  console.log("Año más frecuente:", añoMasFrecuente)
  console.log("Diferencia entre el más antiguo y el más nuevo:", diferencia)
}

calcularEstadisticas()

//---------------------------- 8. Manejo de Cadenas

// Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas. (toUpperCase)
// Eliminar espacios en blanco al inicio y final de los nombres de autores. (trim)
// Formatear los emails de los usuarios a minúsculas.(toLowerCase)

const normalizarDatos = () => {
  // Convierto titulos en mayusculas
  const titulosMayuscula = libros.map(libro => libro.titulo.toUpperCase())

  // elimino espacios en blanco al inicio y final de los nombres de autores
  const autoresLimpios = libros.map(libro => libro.autor.trim())

  // Formatear los emails de los usuarios a minúsculas
  const emailsNormalizados = usuarios.map(usuario => usuario.email.toLowerCase())

  // Mostrar los resultados
  console.log("Títulos en mayúsculas:", titulosMayuscula)
  console.log("Autores sin espacios:", autoresLimpios)
  console.log("Emails normalizados:", emailsNormalizados)
}

normalizarDatos()


//---------------------------- 9. Interfaz de Usuario por Consola

//Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica. (usar switch, poner un booleano como para parametro, y si el usuario agrega una opcion no valida, agregar un mensaje de error, tambien mostrar una opcion para salir del sistema. Para que el menu siga apareciendo hasta que elusuario elija salir, debera usar un bucle, pensar cual debe ser la condion del while para que la funcion se repita correctamente)
const prompt = require("prompt-sync")(); // con esta función podemos ejecutar el prompt en node
// npm install readline-sync
//cada menu es una funcionalidad

// Menú principal
const menuPrincipal = () => {
  let continuar = true

  while (continuar) {
    console.log("\n📋 MENÚ PRINCIPAL")
    console.log("1. Ver todos los libros")
    console.log("2. Generar reporte de libros")
    console.log("3. Ver libros con títulos válidos")
    console.log("4. Ver estadísticas de publicaciones")
    console.log("5. Normalizar datos")
    console.log("6. Salir")

    const opcion = prompt("Seleccioná una opción: ")

    switch (opcion) {
      case "1":
        console.log(" Lista de libros:")
        console.log(libros)
        break;
      case "2":
        generarReporteLibros()
        break;
      case "3":
        librosConPalabrasEnTitulo()
        break;
      case "4":
        calcularEstadisticas()
        break;
      case "5":
        normalizarDatos()
        break;
      case "6":
        console.log(" Saliendo del sistema...")
        continuar = false;
        break;
      default:
        console.log(" Opción inválida. Elegí del 1 al 6.")
        break;
    }
  }
}

menuPrincipal()


//while repite el menu hasta que el usuario quiera salir
//dentro se muestran las funciones que se van a ejecutar segun el numero seleccionado
//prompt se pregunta al usuario que opcion quiere
//  usamos switch  para evaluar una opción entre varias posibles, en este caso el susuario selecciona una de las opciones del 1 al 6 y se ejecuta la función del ejercicio segun cual haya elegido mostrando el resultado.
//cuando se pone la opcion 6,  cambia el booleano a false, y el while se corta, el menú ya no se muestra más.



//---------------------------- 10. Comentando mi código

// Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código. 

// Deberán dividir el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.


