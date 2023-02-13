let response = await fetch('./pokemons.json')
let data = await response.json();
let pokeCon = document.querySelector(".pokeCon")
data.forEach(function(pokemon){
   let pokeDiv = document.createElement("div")
       pokeDiv.style.position = "relative"
       pokeDiv.style.width ="20%" 
       pokeDiv.style.border = "1px black solid"
       pokeDiv.classList.add(`${pokemon.type}`)
   let pokePic = document.createElement("img")
       pokePic.src = pokemon.image
       pokePic.style.position = "relative";
       pokePic.style.width = "100%";
       pokeDiv.append(pokePic)
   let pokeName = document.createElement("h4")
       pokeName.innerHTML = pokemon.name
       pokeDiv.append(pokeName)
   let pokeType = document.createElement("h4")
       pokeType.innerHTML = pokemon.type
       pokeDiv.append(pokeType);
   pokeCon.append(pokeDiv)
})
