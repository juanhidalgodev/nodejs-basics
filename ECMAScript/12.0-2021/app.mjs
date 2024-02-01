/**********************************************************************************************
 * https://262.ecma-international.org/12.0/
 **********************************************************************************************/

const log = console.log;

// Numberic separators
let amount1 = 7_000_200_00;
let amount2 = 700020000;
log(amount1 === amount2);

amount1 = 3_938.11;
amount2 = 3938.11;
log(amount1 === amount2);

amount1 = 3938_00;
amount2 = 3938.0;
log(amount1, amount2, amount1 === amount2);


log("#######################################");
//String.protype.replaceAll
let text =
  "Jack asked, -What will you gIVE me in return for my cow?- The man answered, -I WILL give YOU FIVE MAGIC BEANS!-";
text = text.replaceAll("gIVE", "give");
text = text.replaceAll("give", "GIVE");
log(text);


log("#######################################");
// logical assignment operators (??=, &&=, ||=)
// Assign when the value is null or undefined.
let num = undefined;
log((num ??= 777));

// Assign when the value is truthy.
num = 11;
log((num &&= 27));

// Assign when the value is falsy. The values false, null, 0, "", undefined, and NaN are falsey.
num = "";
log((num ||= 3));


log("#######################################");
// Promise.any method
// returns a promise that will resolve as soon as one of the promises is resolved.
const catPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "Cat");
});

const dogPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 300);
});

const tigerPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Tiger");
});

try {
  log(await Promise.any([catPromise, dogPromise, tigerPromise]));
} catch (error) {
  log(error);
}


log("#######################################");
// AggregateError
// represent multiple errors in a single object.
const promise01 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error #1"), 100);
});

const promise02 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error #2"), 100);
});

const promise03 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error #3"), 100);
});

try {
  log(await Promise.any([promise01, promise02, promise03]));
} catch (error) {
  log(error);
  log( '----' )
  log(error.name);
  log( '----' )
  log(error.message);
  log( '----' )
  log(error.errors);
}

log( '----' )

const groupedErrors = new AggregateError([
    new TypeError('The number must be between 11 and 21'),
    new SyntaxError('The first name must start with a letter.'),
    new EvalError('The API key is not valid'),
  ], 'Internal Server Error')

  try {
    throw groupedErrors;
  } catch (error) {
    log(error.name);   
    log(error.message); 
    log(error.errors);  
  }


log("#######################################");
// Array.prototype.sort()
const arr1 = [11,3,21,1,2];
log( arr1.sort() );

const names = ["John", "Steve", "Andres", "Irvin"];
log( names.sort() );