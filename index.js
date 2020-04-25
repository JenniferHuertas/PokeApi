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
      <p>${data.types.type}</p>
      <p>${data.abilities}</p>
      <img src='${data.sprites.front_default}'>
    </div>  
  </div>
  `;
  console.log(data);
})
.catch(err => console.log(err));
}

buscarPokemon(5);






