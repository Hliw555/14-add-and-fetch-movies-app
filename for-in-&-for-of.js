console.log('-->>>> 1. Practice => for-in loop <<<<')
console.log('-->>>> 2. Practice => for-of loop <<<<')

/*
*        Array Looping
*/
const carBrands = ['benz', 'bmw', 'tesla', 'audi']

console.log(carBrands[2])

console.log('>>>>> 1. Use for-in front to array <<<<<')
for (const variable in carBrands) {
    console.log('- front', variable)
}
console.log('.....................')
console.log('>>>>> 2. Use for-of back to array <<<<<')
for (const variable of carBrands) {
    console.log('- back', variable)
}

/*
*        Object Looping
*/
const obj = { fname: "John", lname: "Doe", age: 25 };

console.log('>>>>> 1. Use for-in to object <<<<<')
for (let variable in obj) {
    console.log(variable)
    // console.log(obj.fname)
    // console.log(obj['fname'])
}

console.log(">>>>> 2. Can't use for-of to object <<<<<")
// for (let variable of obj) {
    //     console.log(variable)
//     // console.log(obj.fname)
//     // console.log(obj['fname'])
// }


// for (const cars of obj) {
//     console.log(cars)
// }


console.log(">>>>> Use for-in front loop object of objects <<<<<")
const  objOfBlackpink = {
    o1: {name: 'jennie', age: 25, position:'dancer1'},
    o2: {name: 'jisoo', age: 29, position:'voice'},
    o3: {name: 'rose', age: 24, position:'guitar'},
    o4: {name: 'lisa', age: 23, position:'dancer2'}
}

let arrOfBlackpink = [];
for (let member in objOfBlackpink) {
    // console.log(member)

    console.log(objOfBlackpink[member])
    // arrOfBlackpink.push(member)
    arrOfBlackpink.push(objOfBlackpink[member])
}

console.log(objOfBlackpink)
console.log(arrOfBlackpink)