/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let x = 0
let y = 1

function fibonacci () {
  for (let i = 0; i < 50; i++) {
    console.log(x)
    let fibonacci = x + y
    x = y
    y = fibonacci
  }
}

fibonacci()