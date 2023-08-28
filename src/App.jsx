import { Box, Container, ThemeProvider } from '@mui/material'
import Pokemon from './components/Pokemon/Pokemon'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: theme.palette.background.default,
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: 1280,
            p: '0 150px',
          }}
        >
          <Pokemon />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
