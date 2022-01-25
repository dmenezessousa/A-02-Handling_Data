const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const getUserIdAndFood = userData.map(user=>{

    return{
      id: user.id,
      favoriteFoods: user.favorites.food,
    }

})
console.log('getUserIdAndFood',getUserIdAndFood);



// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const getUserWithPizza = userData.reduce((acc,user)=>{

  //Filter String Pizza from array
  const filterArray = user.favorites.food.filter(pizza => pizza === "pizza");
  //Make array to string
  const arrayToString = filterArray.toString();

  //check if string matches and add user name 
  if(arrayToString === 'pizza'){
    return [...acc, user.name]
  }
  return acc

},[]);

console.log("Users that likes Pizza are: ", getUserWithPizza);


// 7. Show us an example of a switch statement being used

 const Purse = "Prada"; //dog

 switch(Purse){
   case "Calvin Klein" :
     console.log("This Purse is not Expensive");
     break;
   case "Guess":
     console.log("This Purse is not Expensive");
     break;
   case "Prada" :
     console.log("This Purse is Expensive. Your wife will love it..");
     break;
   default: 
   console.log("It's not a Purse")

 }
