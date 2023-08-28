import { useEffect, useState } from 'react'
import { Box, Chip, Typography, styled } from '@mui/material'
import api from '../../api/api'
import pointerCursorIcon from '../../assets/pointer-cursor-icon.svg'

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '17px',
  lineHeight: '150%',
}))

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [choosedPokemon, setChoosedPokemon] = useState('')
  const [pokemon, setPokemon] = useState({
    stats: [],
  })

  const choosePokemon = (pokemonName) => {
    setChoosedPokemon(pokemonName)
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await api.pokemon.getPokemons({ limit: 10 })
      setPokemons(pokemons)

      setChoosedPokemon(pokemons.results[0].name)
    }

    fetchPokemons()
  }, [])

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await api.pokemon.getPokemon(choosedPokemon)
      setPokemon(pokemon)
    }

    if (choosedPokemon) fetchPokemon()
  }, [choosedPokemon])

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            border: 1,
            borderColor: 'primary.contrastText',
            p: '7px',
          }}
        >
          <Typography fontSize='12px' lineHeight='113%'>
            ПОКЕМОНЫ API
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={pointerCursorIcon} alt='Pointer cursor' />
          <div>
            <Typography fontSize={12}>
              Нажмите на <br /> нужного Покемона
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '10px',
          mt: '54px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '10px',
            columnGap: '6px',
          }}
        >
          {pokemons?.results?.map((pokemon) => (
            <Chip
              key={pokemon.name}
              label={<Typography fontSize={20}>{pokemon.name}</Typography>}
              onClick={() => choosePokemon(pokemon.name)}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '44px',
            p: '44px 44px 16px',
            bgcolor: 'background.paper',
          }}
        >
          <Typography
            color='text.secondary'
            fontSize={48}
            variant='h2'
            textTransform='capitalize'
          >
            {pokemon?.name}
          </Typography>
          <Box
            component='img'
            src={pokemon?.sprites?.front_default}
            alt='pokemon'
            sx={{
              width: '100%',
              height: '200px',
              imageRendering: 'pixelated',
              objectFit: 'contain',
            }}
          />
          <div>
            <StyledDescription>Снялся в 78 сериях</StyledDescription>
            <StyledDescription>id: {pokemon?.id}</StyledDescription>
            <StyledDescription>height: {pokemon?.height}</StyledDescription>
            <StyledDescription>
              attack: {pokemon?.stats[1]?.base_stat}
            </StyledDescription>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Pokemon
