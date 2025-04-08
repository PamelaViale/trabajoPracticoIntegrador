// Integrantes del grupo : Viale Pamela   
const prompt = require("prompt-sync")();
// node tp-integrador.js

//--------------------- Trabajo Práctico Integrador
//---------------------- Introducción a Javascript 

// Sistema de Gestión de Biblioteca
// Introducción
// El siguiente trabajo práctico integrador está diseñado para evaluar tus conocimientos en los fundamentos de JavaScript a través de la implementación de un conjunto de tareas que deben ser resueltas en un solo programa. Asegúrate de aplicar las buenas prácticas y estándares de nomenclatura, además de seguir las instrucciones dadas.
// Objetivo
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

// const agregarLibro = (id, titulo, autor, anio, genero) => {
//   const nuevoLibro = { id, titulo, autor, año: anio, genero, disponible: true }
//   libros.push(nuevoLibro)
//   console.log(`Libro agregado: "${titulo}"`)
// };
// agregarLibro(11, "La cúpula", "Stephen King", 2009, "Terror")
//  console.log(libros)



// B. Buscar libro
// const buscarLibro = (criterio, valor) => {
//   const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
//   console.log("Resultado de búsqueda:", resultado);
// };
// buscarLibro("titulo", "It")



 // C. Ordenar libros 

 // con la i y la j represento los índices, para poder comparar por ejemplo el año de cada libro y ahi poder ordenarlos. 

// const ordenarLibros = (criterio) => {
//   for (let i = 0; i < libros.length - 1; i++) {
//     for (let j = 0; j < libros.length - i - 1; j++) {
//       if (libros[j][criterio] > libros[j + 1][criterio]) {
//         let temp = libros[j];
//         libros[j] = libros[j + 1]
//         libros[j + 1] = temp;
//       }
//     }
//   }
//   console.log(`Libros ordenados por ${criterio}:`, libros)
// };

// ordenarLibros("año")



// // D. Borrar libro

// const borrarLibro = (id) => {
//   const index = libros.findIndex(libro => libro.id === id)
//   if (index !== -1) {
//     const borrado = libros.splice(index, 1)
//     console.log(`Libro eliminado:`, borrado)
//   } else {
//     console.log("Libro no encontrado.")
//   }
// };

// borrarLibro(4)


// ----------------------------  3. Gestión de Usuarios

// A.Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 

// B.Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

// C.Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// D.Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.



