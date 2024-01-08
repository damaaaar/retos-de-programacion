/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const longitud = (a, b) => {
  if (a.length !== b.length){
    return false
  } else {
    return true
  }
}

const letras = (x, y) => {
  if (x === y) {
    return false
  }
  const primera = x.toLowerCase().split('')

  return primera.every((letra) => {
    return y.includes(letra)
  })
}

function anagrama (primeraPalabra, segundaPalabra) {
  const mismaLongitud = longitud(primeraPalabra, segundaPalabra)
  const mismasLetras = letras(primeraPalabra, segundaPalabra)

  return mismaLongitud && mismasLetras ? true : false
}
