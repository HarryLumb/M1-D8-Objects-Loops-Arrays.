/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arr = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const details = {
  name: "Harry",
  surname: "Lumb",
  emailAddress: "harrylumbb@gmail.com",
  age: 27,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

details.drivingLicense = true;
console.log(details);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete details.age;
console.log(details);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const details2 = {
  name: "Barry",
  surname: "Thumb",
  emailAddress: "barrylumbb@gmail.com",
};
console.log(details2);

console.log(
  JSON.stringify(details.emailAddress) === JSON.stringify(details2.emailAddress)
); // FALSE

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

const totalShoppingCart = 10;

if (totalShoppingCart > 50) {
  console.log("Your delivery is free your total is ", totalShoppingCart);
}
if (totalShoppingCart < 50) {
  console.log("Your shopping cart + Delivery is ", totalShoppingCart + 10);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

const totalShoppingCart2 = 100;

if (totalShoppingCart2 > 50) {
  console.log(
    "Your total with the 20% discount is ",
    totalShoppingCart2 - (totalShoppingCart2 / 100) * 20
  );
}
if (totalShoppingCart2 < 50) {
  console.log(
    "Your shopping cart  with the 20 % discount + Delivery is ",
    totalShoppingCart2 - (totalShoppingCart2 / 100) * 20 + 10
  );
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = {
  brand: "Vauxhall",
  model: "Astra",
  numberPlate: "GJ205MH",
};
console.log("car1", car1);

let car2 = Object.assign({}, car1);
car2.numberPlate = "222222";
console.log("car2", car2);

let car3 = Object.assign({}, car1);
car3.numberPlate = "333333";
console.log("car3", car3);

let car4 = Object.assign({}, car1);
car4.numberPlate = "444444";
console.log("car4", car4);

let car5 = Object.assign({}, car1);
car5.numberPlate = "555555";
console.log("car5", car5);

let car6 = Object.assign({}, car1);
car6.numberPlate = "666666";

console.log("car6", car6);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("------ array------");
const carsForRent = [car1, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
const carsForSale = [];
carsForSale.push(["car7", "car8", "car9"]);

const totalCars = carsForSale + carsForRent;

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("-----------LOOP-----------");

for (let i = 0; i < carsForRent.length; i++) {
  const order = carsForRent[i];
  console.log(
    "TOTAL CARS LOOP",
    i + 1,
    order.model,
    order.brand,
    order.numberPlate
  );
}
