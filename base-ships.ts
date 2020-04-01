class Spacecraft{
    
    constructor(public propulsor:string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface Contairnership{
    cargoContainers?: number //é opcional com o "?"
}

export {Spacecraft, Contairnership}