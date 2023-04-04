import { useLayoutEffect, useState } from 'react'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? dark : light
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme.title)
  }

  useLayoutEffect(() => {
    const themeStorage = localStorage.getItem('theme') ?? 'light'
    const newTheme = themeStorage === 'light' ? light : dark
    setTheme(newTheme)
  }, [])

  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
