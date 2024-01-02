// let num = prompt("Enter the Number for factorial Calculation")

// let ans = 1;

// for (let index = 1; index <=num; index++) {
//     ans = ans*index;
    
// }

// alert(`The factorial is ${ans}`)


function factorial(number) {
    let ar = Array.from(Array(number+1).keys())
    // console.log(ar.slice(1,))
    let c = ar.slice(1,).reduce((a,b)=>{
        return a*b
    })
    // console.log(c);
    return c;
}


function facfor(number) {

    let ans = 1;

   for (let index = 1; index <=number; index++) {
         ans = ans*index;
    
   }

   return ans;
    
}

console.log(facfor(5))
console.log(factorial(5))