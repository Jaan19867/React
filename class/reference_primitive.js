// iske baare me jaanna jaroori he 
const person={

    name:'Riz'
};
const thirdPerson={
    ...person

};
console.log(thirdPerson);
const secondPerson=person;
person.name='Azad';
console.log(secondPerson);
// uper me ye as reference pass hua he
let a=6;
let b=a;
a++;
console.log(b);
console.log(thirdPerson);
//so uper ke case me ye primitve data type he
