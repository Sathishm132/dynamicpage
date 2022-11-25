// console.log("person1: shows ticket");
// console.log("person2:shows ticket");
// const promiseticket=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ticket")
//     }, 3000);
// });
// console.log("person4:showticket");
// const getcoldtea=promiseticket.then((t)=>{
//     console.log("i am hungry")
//     console.log("i need coldtea");
//     return new Promise((resolve, reject) => 
//         resolve(`${t} coldtea`)
//     );
// });
// getcoldtea.then((t=>{console.log(t)}))
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
