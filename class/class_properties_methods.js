// use of parent class in child class 
class Human {
    // this is es6 way to write properites
    // constructor(){


    //     this.gender='male';

    // }
    // es 7 way to do above thing 

gender='male' ;
// older way to write method
    // printGender(){
    //     console.log(this.gender);  
    //   }
    // newer way to write a method 
    printGender=()=>{ console.log(this.gender);}
    
}





class Person extends Human{
    
    // constructor() {
    //     super();
        
    //     this.name='Max';
    // }
    name='Max';
//     printMyName() {
//         console.log(this.name);
// }
printMyName=()=>{
    console.log(this.name);
}




}
const person = new Person();
person.printMyName();
person.printGender();