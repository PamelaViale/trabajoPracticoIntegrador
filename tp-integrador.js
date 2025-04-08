// Integrantes del grupo : Viale Pamela   
const prompt = require("prompt-sync")();

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
