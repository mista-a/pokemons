import { createTheme } from '@mui/material'
import createComponents from './createComponents'
import { createPalette } from './createPalette'

const palette = createPalette()
const components = createComponents(palette)

const theme = createTheme({
  components,
  palette,
})

export default theme
