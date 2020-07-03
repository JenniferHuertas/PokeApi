const buscador = document.getElementById('searchPokemon');

function buscarPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
.then(response => response.json() )
.then(data => {
  let lista = document.getElementById('listaPokemon');
  lista.innerHTML = `
  <div class="pokemon-list">
    <div class="pokemon">
      <p>${data.name}</p>
      <p>${data.order}</p>
      <p>${data.types[0].type.name}</p>
      <p>${data.types[1].type.name}</p>
      <p>${data.abilities[0].ability.name}</p>
      <p>${data.abilities[1].ability.name}</p>
      <img src='${data.sprites.front_default}'>
    </div>  
  </div>
  `;
  console.log(data);
})
.catch(err => console.log(err));
}

buscarPokemon(1);

const searchPokemons = (pokemonList, inputValue) => pokemonList.filter(
  (pokemon) => pokemon.name.toLowerCase().startsWith(inputValue),
);

const searchPokemon = document.getElementById('searchPokemon');
searchPokemon.addEventListener('input', () => {
  lista.innerHTML = '';
  showPokemons(searchPokemons(data, searchPokemon.value));
});






