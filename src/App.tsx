/* eslint-disable react/jsx-no-undef */
import BarraLateral from './container/BarraLateral'
import { Container, GlobalStyle } from './styles'
import { NavBar } from './container/Inicio'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <BarraLateral></BarraLateral>
        <NavBar></NavBar>
      </Container>
    </div>
  )
}

export default App
