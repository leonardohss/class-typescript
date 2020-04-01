import {Spacecraft, Contairnership} from "./base-ships"

export class MilleniumFalcon extends Spacecraft implements Contairnership{

    cargoContainers:number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{console.log('Failed to jump into hyperspace')}
    }//subscreve o método da classe base
}
