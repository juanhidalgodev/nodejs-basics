/**********************************************************************************************
 * https://lodash.com/docs/
 **********************************************************************************************/

import _ from 'lodash';

// Array Methods

const lodashArray = [];

// 1. Creates an array of elements split into groups.
lodashArray.push( 
    _.chunk(['laptop', 'mouse', 'car', 'wheel'], 2) 
    );
// 2. Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
lodashArray.push(
    _.compact([0, 11, false, null, '', 23, 'John'])
    );
// 3. Creates a new array concatenating array with any additional arrays and/or values.
const pets = ['cat', 'dog', 'fish'];
lodashArray.push(
     _.concat(pets, 'turtle', ['bird'], [['tarantula', 'snake']]) 
     );
// 4. Creates an array of array values not included in the other given arrays.
lodashArray.push(
     _.difference([2, 1, 10, 9], [2, 3, 9]) 
     );

// 5. Creates a slice of array with 2 elements dropped from the beginning. 
lodashArray.push(
     _.drop(['cat', 'dog', 'car'],2)
     );

// 6. Fills elements of array with 'x' from 1 to 4, but not including 4.
lodashArray.push(
     _.fill(['orange', 'car', 'banana', 'pear', 'apple'], 'x', 1, 4)
     );     
     
// ...


lodashArray.forEach((lodash,idx) => console.log(idx+1,"==>", lodash));
