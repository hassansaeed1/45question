/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
that stores several examples. Use your list to print a series of statements about these items, such as “I would 
like to own a Honda motorcycle.”*/


var favorite_mode:string[]=["Rebirth","civic","Honda125","HondaCity"]
for(let index=0;index<favorite_mode.length;index++){
    console.log(`I want to buy ${favorite_mode[index]}`)
}