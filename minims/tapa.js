// let x=((rag,sag)=>{
//     setTimeout(() => {
//         console.log(`these is ${rag}`);
//     sag()
        
//     }, 2000);
   
// })

// let y=(()=>{
//     console.log(`the is sushant`);
// })


// x("sushant",y)


// //anonymous function
// // a function without a name

// let sum=function (a,b) {
//     sum=a+b
   
    
// }
// sum(5,5)
const outerfun=(a)=>{
    let b=10;
    const innerfun=()=>{
        sum=a+b
        console.log(`the is ${sum}`);
    }
    innerfun()
}
outerfun(5)

