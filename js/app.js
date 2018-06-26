/*Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6*/
function computeAverageLengthOfWords(word1, word2) {
    return (word1.length + word2.length)/2;
}

module.exports = computeAverageLengthOfWords;

/*Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3*/
function getNthElement(array, n) {
    for(var i=0; i<= array.length; i++);
    array.indexOf(n);
    return array[n];
  }
  
  module.exports = getNthElement;

  /*Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notas:

Para hacer este problema, debes estar familiarizado con String.split, y Array.join.*/
function convertDoubleSpaceToSingle(str) {
    var arrstr = str.split ('  ');
      return arrstr.join(' ');
    }
    
    module.exports = convertDoubleSpaceToSingle;
    /*Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true*/
function areValidCredentials(name, password) {
    module.exports = areValidCredentials;
  var sizeName = name.length;
  var sizePassword= password.length;
  
  if (sizeName> 3 && sizePassword >= 8){
    return true
    
  }else {
      return false
    }
  }
  
  module.exports = areValidCredentials;

  /*findPairForSum
  Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

 */
    function findPairForSum(array, number) {
        for (var i = 0; i < array.length; i++) {
            for ( var j = i + 1; j < array.length; j++) {
             if (array[i] + array[j] == number) {
               newArray = [array[i], array[j]];
             }
              
            }
          }
          return newArray;
        }
        module.exports = findPairForSum;
/*Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]*/
function filterOddElements(arr) {
    var odd = "";
    for (var i=0; i<arr.length; i++){
      if ((even[i] %2===1)){
        arr.push(arr[i]);
      }
    }
    }
    
    module.exports = filterOddElements;
/*scriba una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta dentro del array dado.

Notas:

Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.
Ejemplo:

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'*/
function findShortestWordAmongMixedElements(arr) {
	var newArray  = [];
	var output = "";
  for(var i= 0; i<arr.length; i++) {
		if (typeof(arr[i]) === "string" && arr[i].length < 5) {
		newArray.push(arr[i]);
		output= newArray[0];
  } 
  else if(arr.length === 0) {
  	output +="";
  }
 }
 return output;
}
module.exports = findShortestWordAmongMixedElements;
/*Escriba una función llamada "findSmallestNumberAmongMixedElements".

Dado un arreglo de elementos mixtos, "findSmallestNumberAmongMixedElements" devuelve el número más pequeño dentro del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4*/
function findSmallestNumberAmongMixedElements(arr) {
  
    var newArray  = [];
      var output = 0;
    for(var i= 0; i<arr.length; i++) {
          if (typeof(arr[i]) === "number" && arr[i] < 5) {
          newArray.push(arr[i]);
          output = newArray[0];
          }
          else if(arr.length === 0) {
        output += 0;
    }
  }
  return output;
  }
  module.exports = findSmallestNumberAmongMixedElements;
  