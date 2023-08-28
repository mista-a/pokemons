const pokemonApi = (instance) => {
  return {
    async getPokemons(params) {
      const { data } = await instance.get('pokemon', { params })
      return data
    },

    async getPokemon(name) {
      const { data } = await instance.get(`pokemon/${name}`)
      return data
    },
  }
}

export default pokemonApi
