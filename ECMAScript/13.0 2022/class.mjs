class Car {
    constructor(){
        console.log( '>> constructor <<' )
        console.log( '----' );
    }
    #newCar = 'new car created'; // Adding # makes it declared as private
    person = 'John';
    #name = 'Emma';

    get seller(){
        return this.#name;
    }

    set seller(newName){
        this.#name = newName;
    }

    get #topSeller(){
        return 'Mario';
    }

    getTopSeller() {
        return this.#topSeller;
    }

    static store = 'EMAC';

    static getStoreAddress() {
        return 'Av Los Pinos, #370, CP 1985624585';
    }

    static {
        console.log( '>> static initialization block <<' );
    }

}

export { Car };