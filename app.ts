/*let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

let episode: number = 4
console.log("This is episode " + episode)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDoid: string
favoriteDoid = 'BB-8'
console.log("My Favorite Doid is " + favoriteDoid)

let isEnoughToBeatMF = function (parsecs: number):boolean{
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R-2')

function inc (speed:number, inc:number = 1):number{
    return speed + inc
}

console.log(`inc (5, 2) = ${inc(5,2)}`)
console.log(`inc (5) = ${inc(5)}`)*/

import {Spacecraft, Contairnership} from "./base-ships"
import {MilleniumFalcon} from "./starfighter"

import * as _ from 'lodash'

console.log(_.pad("TypeScript Examples", 40, "="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace

let goodForTheJob = ( ship:Contairnership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)