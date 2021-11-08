// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var nuevoArray = [];
    for (let a in objeto) {
      var subArray = [];
      letra = a;
      subArray = [letra, objeto [letra]]
      nuevoArray.push(subArray);
    };
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var array = [];
  for (var i = 0; i <= string.length - 1; i++) {
    var c = 0;
    var firstLetter = "";
    for (var j = 0; j <= string.length - 1 ; j++) {
      if (string[i] === string[j]){
        c++
        firstLetter = string[i]
      }
    }
    x = 0;
    for (var j = 0; j < array.length - 1; j++) {
      if (firstLetter === array[j]) {
        x = 1;
      }
    }
    if (x !== 1 ) {
      array.push([c, firstLetter])
    }
  }
  var obj = {};
  for (var i = 0; i <= array.length - 1; i++) {
    obj[array[i][1]] = array[i][0];
  }

  var aux = "abcdefghijklmnñopqrstuvwxyz";
  var aux2 = {};
  for (var i=0; i <= aux.length - 1 ; i++ ) {
    if (obj[aux[i]]) {
      aux2[aux[i]] = obj[aux[i]];
    }
  }

  return aux2
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var a1 = "";
    var a2 = "";
    for (var i = 0; i < s.length ; i++) {
     if (s[i] === s[i].toUpperCase()){
       a1 = a1 + s[i]
     } else {
       a2 = a2 + s[i]
     }
   }
   return a1 + a2;
  }

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var a1 = "";
  var arr1 = [];
  for (var i=0; i <= str.length - 1; i++ ){
    if ( str[i] !== " "){
      a1 = a1 + str[i];
      if(i === str.length - 1) {
        arr1.push(a1);
        a1 = "";
      }
    } else {
      arr1.push(a1);
      a1 = "";
    }
  }
  var a2 = ""
  var arr2 = [];
  for (var i = 0; i <= arr1.length -1; i++) {
    for (var j = arr1[i].length - 1; j >= 0 ; j-- ) {
      a2= a2 + arr1[i][j];
    }
    arr2.push(a2)
    a2="";
  }
  var resp = "";
  for (var i = 0; i < arr2.length; i++) {
    if ( i === arr2.length - 1) {
      resp = resp + arr2[i];
    } else {
      resp = resp + arr2[i] + " ";
    }
  }
  return resp;
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numeroString = numero.toString();
    var x = 0;
      for (var i = 1; i <= numeroString.length/2 ; i++) {
        if (numeroString[i-1] === numeroString[numeroString.length-i]) {
          x = 1;
        } else {
          x = 0;
          break
        }
      }
      if (x === 1) {
        return "Es capicua"
      } else {
        return "No es capicua"
      }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var a1 = "";
   for (var i = 0; i < cadena.length ; i++){
     switch (cadena[i]) {
       case "a":
       case "b":
       case "c":
         a1 = a1
         break;
       default:
         a1 = a1 + cadena[i];
         break;
     }

   }
   return a1
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var a = [];
  for (var i = 0 ; i < arr.length ; i++) {
    for (var j = i+1 ; j < arr.length ; j++) {
      if (arr[i].length > arr[j].length) {
        a= arr[i];
        arr[i]= arr[j];
        arr[j] = a;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  return arreglo1.filter(Set.prototype.has, new Set(arreglo2));
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
