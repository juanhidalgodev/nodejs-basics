/**********************************************************************************************
 * https://262.ecma-international.org/14.0/
 **********************************************************************************************/

const log = console.log;


log( Array.prototype.toSorted );
// Sort the elements in an array without mutating the original array.
const arr1 = [11,3,21,1,2];
const arr2 = arr1.toSorted();
log( arr1, arr2)
log( arr1 === arr2 );

const names = ["John", "Steve", "Andres", "Irvin"];
log( names.toSorted() );

const numbers = [5, 11, 22, 3, 1];
log( numbers, numbers.toSorted((a, b) => a - b) );
log( numbers, numbers.toSorted((a, b) => b - a) );


log( Array.prototype.toReversed );
// Return a new array with the elements in reversed order, without mutating the original array.
log( numbers, numbers.toReversed() );
log( names, names.toReversed() );


log( Array.prototype.with );
// Change the value of a given index in an array, returning a new array.
log( numbers, numbers.with(2, 1339) );
log( numbers, numbers.with(3, 10).map((n) => n * 2));


log( Array.prototype.findLast );
//  Get the final instance of a matching element from an array
log( numbers, 
  numbers.findLast(n => {
    return n - 1 > 1;
  }) 
);


log( Array.prototype.findLastIndex );
// It gives you the index of the element matching.
log( numbers, numbers.findLastIndex(n => n -1 > 1) );


log( Array.prototype.toSpliced );
// Insert items and creates a new array.
log (names, names.toSpliced(1, 0, "Doris", "Laura") ); 
