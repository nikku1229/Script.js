// Question 1 (Given an array of numbers, use the map function with an arrow function to square each element of the array.)

        // let array = [1,2,3,4,5,6];
        // let store = array.map((value)=>{
        //     return value ** 2;
        // });
        // console.log(store);


// Question 2 (Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..)

        // function score(marks){
        //     marks >= 90 ? console.log('A') : marks >= 80 ? console.log('B') : marks >= 70 ? console.log('C') : marks >= 60 ? console.log('D') : console.log('F');
        // }
        // score(90);


// Question 3 (Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.)

        // const cars = {
        //     name: 'Mercedes-Benz G-Class',
        //     model: 'G-Class AMG G 63 Grand Edition',
        //     year: 2018
        // }
        // function change(changedYear){
        //     cars.year = changedYear;
        // }
        // change(2020);
        // const {model, year} = cars;
        // console.log(model);
        // console.log(year);


// Question 4 (Given an array of numbers, use the filter function to create a new array containing only the prime numbers.)

        // const array = [1,2,3,4,5,6,7,8,9,10,100,98,97,96,95,94,37,76,77,54];
        // const primeArray = array.filter((value)=>{
        //     return prime(value);
        // });
        // function prime(number){
        //     if(number === 2 || number === 3) return true;
        //     else if(number === 1 || number % 2 === 0) return false;
        //     else{
        //         for(let i=2; i <= Math.sqrt(number); i++){
        //             if(number % i === 0) return false;
        //         }
        //         return true;
        //     }
        // }
        // console.log(primeArray);


//  Question 5 (State different use cases of map, filter and reduce functions.)

//      i. Map function 
            // Map function use to create a new array of new form having the original size of the array and perform a task to all element present in original array and store in new array.

            // example: having a array of length n and we want to find square of the each element then map function return new array having the same size of array.

            // let array = [1,2,3,4,5,6];
            // let store = array.map((value)=>{
            //     return value ** 2;
            // });  


//      ii. Filter function
            // Filter function use to filter out the unwanted element from the original array and store the rest of the element in new array. Filter function change the size of original array and filter out the NULL and UNDEFINED values.

            // example: having a array of size n and filter out the even element in the array.

            // let array = [1,2,3,4,5,6,7,8];
            // let evenNumber = array.filter((value)=>{
            //    return value % 2 ? true : false;
            // })

        
//      iii. Reduce function
            // Reduce function help to reduce array in a single element by performing such task like addition,subtraction,multiplication, etc and store in a variable having one element.

            // example: having a array of size n and find the miltiple of all element present in array

            // let array = [1,2,3,4,5];
            // let store = array.reduce((fixValue, varValue)=>{
            //     return fixValue + varValue;
            // },0);



// Question 6 (Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.)

        // async function fetchData(){
        //     try {
        //         const apiData = await fetch('https://jsonplaceholder.typicode.com/posts');
        //         const data = await apiData.json();
        //         console.log(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // fetchData();


// Question 7 (Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.)


// When Contact properties is given

        //  const person = {
        //      name: 'Nitish sharma',
        //      address: {
        //          street: '10',
        //          city: 'Faridabad',
        //          state: 'Haryana'
        //      },
        //      contact: {
        //          phone: '8877665588',
        //          email: 'nitishsharma@gmail.com'
        //      }
        //  }
        //  let phoneNumber = person.contact?.phone;
        //  console.log(phoneNumber);

        // IT WILL LOG THE OUTPUT.........

// When contact property is missing

        //  const person = {
        //      name: 'Nitish sharma',
        //      address: {
        //          street: '10',
        //          city: 'Faridabad',
        //          state: 'Haryana'
        //      }
        //  }
        //  let phoneNumber = person.contact?.phone;
        //  console.log(phoneNumber);

        // IT WILL LOG THE UNDEFINED.........
