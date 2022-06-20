let company = ['nipa','facebook','aws','google','alibaba']
let vnl = {fname: 'Thailand', age: 25 }

//Destructuring with rest parameter
let [a,...fname] = company
let {...volley} = vnl

//console.log(a, fname)
console.log(volley)
