import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#3b3f44',
    },
    primary: {
      main: '#f78318',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>heey</div>
    </ThemeProvider>
  )
}

export default App
