///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: "Supreme Pizza",
    price: 12.99,
    category: "entree",
    popularity: 5, // Assuming 5 is the highest popularity
    rating: 4.5, // Assuming an average rating of 4.5
    tags: ["gluten-free", "vegetarian"]
  };
  

//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1]);


/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

//CODE HERE

// Destructuring the price property from the pizza object
const { price } = pizza;

// Printing the value of the new price variable
console.log(price);


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

//CODE HERE

// Destructuring the category property from the pizza object
const { category } = pizza;

// Printing the value of the new category variable
console.log(category);


//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE


const foodArr = [
    {
      name: "Margherita Pizza",
      price: 9.99,
      category: "entree",
      popularity: 4,
      rating: 4.2,
      tags: ["vegetarian", "classic"]
    },
    {
      name: "BBQ Chicken Wings",
      price: 8.49,
      category: "appetizer",
      popularity: 3,
      rating: 4.5,
      tags: ["spicy", "finger food"]
    },
    {
      name: "Vegetarian Salad",
      price: 7.99,
      category: "appetizer",
      popularity: 2,
      rating: 4.0,
      tags: ["healthy", "vegan"]
    },
    {
      name: "Pepperoni Calzone",
      price: 11.49,
      category: "entree",
      popularity: 5,
      rating: 4.8,
      tags: ["meat lovers", "folded"]
    }
  ];
  


//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// Callback function to filter food objects based on a specific tag
function filterFoodByTag(foodArray, tagToFilter) {
    return foodArray.filter(food => food.tags.includes(tagToFilter));
  }
  
  // Example: Filtering food objects with the tag "vegetarian"
  const vegetarianFood = filterFoodByTag(foodArr, "vegetarian");
  
  // Logging the result
  console.log(vegetarianFood);
  


// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

const filteredFood = foodArr.filter(food => food.tags.includes("vegetarian"));

console.log(filteredFood);


//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/

//CODE HERE

function filterByProperty(property, number) {
    // Create a variable to hold the filtered array
    const filteredArray = foodArr.filter(food => {
      // Check if the value for the given property is greater than the number
      return food[property] > number;
    });
  
    // Return the filtered array
    return filteredArray;
  }
  
/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

// Invoking filterByProperty with specific values
const highRatingFood = filterByProperty('rating', 4.5);
const expensiveFood = filterByProperty('price', 10);

// Logging the filtered arrays
console.log("High Rating Food:", highRatingFood);
console.log("Expensive Food:", expensiveFood);
