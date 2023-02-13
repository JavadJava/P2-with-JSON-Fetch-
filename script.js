//recieving data from server
let response = await fetch('./pokemons.json')
let data = await response.json();
let pokeCon = document.querySelector(".pokeCon")
data.forEach(function(pokemon){
  // creating and assigning html elements
let pokeDiv = document.createElement("div") ;
  pokeDiv.classList.add(`${pokemon.type}`)
let pokePic = document.createElement("img");
  pokePic.src = pokemon.image
  pokeDiv.append(pokePic)
let pokeName = document.createElement("h4");
  pokeName.innerHTML = pokemon.name
  pokeDiv.append(pokeName)   
let pokeType = document.createElement("h4");
  pokeType.innerHTML = `${pokemon.type}`
  pokeDiv.append(pokeType)
  //
// adding created div to the base element
  pokeCon.append(pokeDiv);
// pokeCon.append(pokeDiv)
})
