///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalFoodPrice = cart.reduce((accumulator, food) => {
    return accumulator + food.price;
}, 0);

console.log(totalFoodPrice);



// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const sumCallback = (accumulator, currentFood) => {
    return accumulator + currentFood.price;
};

const summedPrice = cart.reduce(sumCallback, 0);

console.log(summedPrice);




//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    // Calculate tax on the cartTotal
    const taxedTotal = cartTotal + (cartTotal * tax);

    // Subtract the couponValue
    const finalPrice = taxedTotal - couponValue;

    return finalPrice;
}

// Example usage:
const cartTotal = 36.97;
const couponValue = 5.00;
const tax = 0.06; // 6% tax

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/


/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    id: 12345,
    name: 'Taiwo Omotade',
    email: 'Taiwo@gmail.com',
    loyaltyPoints: 200,
    // Additional properties 
    address: {
        street: '820 Chicago St',
        city: 'Chicago',
        state: 'Illnois',
        zipCode: '60640',
        country: 'USA'
    },
    phoneNumber: '773-812-0004'
};

console.log(customer);
