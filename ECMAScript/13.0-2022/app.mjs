/**********************************************************************************************
 * https://262.ecma-international.org/13.0/
 **********************************************************************************************/
import axios from "axios";

const log = console.log;


// await is valid outside of the async function
await Promise.resolve(log('#>  await'));
const response = await axios.get('https://swapi.py4e.com/api/planets/21/');
log( response.status );


// Dynamic dependency pathing
const { languageSelector } = await import(`./moduleLanguage.mjs`);
log( languageSelector('es') );


// Dependency fallbacks
let language;
try {
  language = await import('./moduloIdioma.mjs');
} catch {
  language = await import('./moduleLanguage.mjs');
}


log( '#######################################' );
// Private class fields, methods and accessors
const transport = await import('./class.mjs');
const car = new transport.Car();

// log( car.#newCar ); //'#newCar' is not accessible outside class 'Car' because it has a private identifier.
log( car.person );

log( '----' )

log( car.seller ); // get #name
car.seller = 'Roberto'; // set #name
log( car.seller ); // get #name

log( '----' )

// log( car.#topSeller ); //'#topSeller' is not accessible outside class 'Car' because it has a private identifier.
log( car.getTopSeller() );


log( '#######################################' );
// static
const { Car } = await import('./class.mjs');
log( Car.store );
log( Car.getStoreAddress() );


log( '#######################################' );
// array and string method at()
const petsArray = ['cat', 'turtle', 'dog', 'snake'];
log(petsArray.at(-3))

const pet = 'turtle';
log(pet.at(-3))


log( '#######################################' );
// Object.hasOwn() - check if a property is the own property of an object.

const engine = {pistons: 4, cylinder: 3, exhaust: 2};
const automobile = Object.create(engine);

log( Object.getPrototypeOf(automobile) === engine);
log( Object.hasOwn("engine") );


log( '#######################################' );
// /d flag
const text = "Loremipsum"; 
log( text.match(/(ip)(sum)/d) );


log( '#######################################' );
// Error.cause
const getPlanets = async()=> {
  try {
    return  await fetch('https://fakeURL.nodomainc.fakedomain/getPlanets'); // cause: Error: getaddrinfo ENOTFOUND fakeurl.nodomainc.fakedomain
    // return ['Tatooine', 'Kamino'];
  } catch (fetchError) {
    // throw new Error(`Something when wrong, please try again later ${fetchError}` ); // The old solution
    throw new Error('Something when wrong, please try again later', { cause: fetchError });
  }
}

try{
  const planets = await getPlanets();
  log(planets);
} catch(error) {
  log(error); // Error: Something when wrong, please try again later ...
  log( '----' )
  // log(error.cause); // cause: Error: getaddrinfo ENOTFOUND fakeurl.nodomainc.fakedomain
}


