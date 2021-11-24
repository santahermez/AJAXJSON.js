let buttonFunction = document.getElementById('newList')
let listItems = document.getElementById("listItems")
let MittFalt2 = document.getElementById('MittFalt') 

buttonFunction.addEventListener("click", fetchJSON)


async function fetchJSON() {
    try {
        let response = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + MittFalt2.value)
        let data = await response.json();
let emptyHTML = ''

for (let drinkItems of data.drinks){
emptyHTML = ` <h1>${drinkItems.strDrink}</h1>
<img src=${drinkItems.strDrinkThumb}></img>`
}
        listItems.innerHTML = emptyHTML;
    } 
    catch (error){
    }
}

