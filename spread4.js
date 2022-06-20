let a1 = [1,2,3]
let a2 = [4,5,6]

//Concatenate:Array Spread Opeartor
let newA3 = [...a1,0,9,...a2]
console.log(a3)
//Concatenate:Object Spread Opeartor
let std1 = {
    fname:'Mark',
    lname:'Zackerberg',
    age:25
}


let std2 = {
    ID:101,
    brach:'Facebook',
    city:'LA'
}
// console.log(std1,std2)
let profile = {...std1,...std2}
console.log(profile)
