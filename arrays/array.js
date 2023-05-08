//  const Lang=['java', 'python', 'c',' ruby', 'html'];

//   this will add dart at the end 
// console.log(Lang.push('dart'))

// this will add dart in the initial 
// console.log(Lang.unshift('dart'))

// this will remove the last element 
// console.log(Lang.pop())
// Lang.pop();

// this will remove the first elememt 
// console.log(Lang.shift()) 
// Lang.shift();


//  console.log(Lang)



// console.log('helo')

// for(let i=0; i<7; i++){
//     console.log("*");
// }







// const actors = [
//     {
//         name: 'actor1',
//         payment: 100
//     },
//     {
//         name: 'actor2',
//         payment: 200
//     },
//     {
//         name: 'actor3',
//         payment: 300
//     }


// ];
//for
// for (let i = 0; i < actor.length; i++) {
//     actors[i].payment = actors[i].payment - 40;
// };
// console.log(actors);


//forEach
// actors.forEach((actor) => {

//    actor.payment= actor.payment -40;
// });  
// console.log(actors);


//for of

//   for(let actor of actors){
//    actor.payment= actor.payment -40;

// }
// console.log(actors);








// const students = [

//     {
//         name: 'student1',
//         marks: 33
//     },
//     {
//         name: 'student2',
//         marks: 55
//     },
//     {
//         name: 'student3',
//         marks: 64
//     },
//     {
//         name: 'student4',
//         marks: 75
//     }


// ];



//filter
// const failed = students.filter((child)=>{
//      if(child.marks < 35){
//        return true
//      }else{
//         return false
//      }

// });

// console.log(failed);



// map


// const user = [

//     {

//         fname: 'shiva',
//         lname: 'shankar'
//     },

//     {

//         fname: 'parvati',
//         lname: 'devi'
//     }
// ]
// const finalUser = user.map((event) => {
//     return {

//         fullname: `${event.fname} ${event.lname}`

//     };


// });

// console.log(finalUser);




//reduce


// const movies=[
//   {
//     name: "interstaller",
//     budget: "100"
//   },
//   {
//     name: "conjuring",
//     budget: "34"
//   },
//   {
//     name: "spider man",
//     budget: "430"
//   }
// ];

//  const total = movies.reduce((acc, movie)=>{

//  acc= acc+ movie.budget;
//  return acc;

//  },0);
//  console.log(total);






  //indexOf


//    const admin= [ 1, 2 ,3 ,5];

//     const user =
//         {
//            name: 'dope',
//            id:   3
//         }
    

//    const Isadmin = admin.indexOf(user.id)> -1;
//     console.log(Isadmin);




// includes

// console.log(admin.includes(user.id));





//find


// const movies=[
  
//   {
//     name: "conjuring",
//     budget: "34"
//   },
//   {
//     name: "spider man",
//     budget: "430"
//   }
// ];


// const myuser= movies.find((user)=>{
//    if ( user.budget=== "430"){
//      return true;
//    }
//    return false;

// });
// console.log(myuser);



 //sort


//  const name=["rakesh", "ronny", "maynak","riya", "shivani", "iqra", "mehak", "payal", "akansha", "swati", "vivek"];
//   name.sort();
//   console.log(name);



//splice


const name=["rakesh", "ronny", "maynak","riya", "shivani", "iqra", "mehak", "payal", "akansha", "swati", "vivek"];

name.splice(3, 3)
name.sort()
console.log(name)