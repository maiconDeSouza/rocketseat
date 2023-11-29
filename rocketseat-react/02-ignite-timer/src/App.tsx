import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { CyclesContextProvider } from './Contexts/CyclesContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </CyclesContextProvider>
    </ThemeProvider>
  )
}
