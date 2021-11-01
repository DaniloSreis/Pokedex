const btn = document.querySelector('.search-pokemon')

function getPokemonId() {
  const input = document.getElementById('input')
  const idPokemon = input.value
  searchPokemon(idPokemon)
}

async function searchPokemon(idPokemon) {
  const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`

  const responsePokemon = await fetch(pokemonApi)
  const dadosJson = await responsePokemon.json()
  getStatistics(dadosJson)
}

function getStatistics(dadosPokemon) {
  const linkImg = dadosPokemon.sprites.front_default
  imgPokemon.setAttribute('src', linkImg)
  namePokemon.textContent = dadosPokemon.name
  hp.textContent = dadosPokemon.stats[0].base_stat
  speed.textContent = dadosPokemon.stats[5].base_stat
  attack.textContent = dadosPokemon.stats[1].base_stat
  defense.textContent = dadosPokemon.stats[2].base_stat
  specialAttack.textContent = dadosPokemon.stats[3].base_stat
  specialDefense.textContent = dadosPokemon.stats[4].base_stat
  type.textContent = dadosPokemon.types[0].type.name
}

btn.addEventListener('click', () => {
  const statisticsPokemon = document.querySelector('.statistics')
  statisticsPokemon.classList.add('active')

  getPokemonId()
  searchPokemon()
  getStatistics()
})
