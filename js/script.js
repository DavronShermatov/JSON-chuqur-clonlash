'use strict'


const car = {
    carname : 'bmw',
    color: 'red',
    extra : {
        isAirbag : true,
        ballon : 5
    }
}


// JSON.stringify bu malumotni object turidan json ko'rinishiga o'tkazadi
const objToJson = JSON.stringify(car)
console.log(objToJson)

//JSON.parse bu malumotni json lo'rinishidan object ko'rinishi olib o'tadi
const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj)

//Clonlash

const clone = JSON.parse(JSON.stringify(car))

clone.extra.ballon = 10

console.log(clone)