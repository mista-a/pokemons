import axios from 'axios'
import pokemonApi from './pokemon'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

const api = {
  pokemon: pokemonApi(instance),
}

export default api
