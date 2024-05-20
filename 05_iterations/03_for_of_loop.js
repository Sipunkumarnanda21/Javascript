// For of loop 

// ["" ,"" ,""]
// [{} ,{} , {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " "){
        continue 
    }
    // console.log(`Each car is ${greet}`);
}

// Maps 
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('FR' , "France")
map.set('IN' , "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key , value] of map) {
    console.log(key , ":-" , value);
}


// Object 

const myObject = {
    game1 : "NFS" ,
    game2 : "Spiderman"
}

// for (const [key , value] of myObject) {
//     console.log(key , value);
// }                                            // For Of loop doesn't work in Object 

