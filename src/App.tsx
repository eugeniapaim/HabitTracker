/* eslint-disable react/jsx-no-undef */
import BarraLateral from './container/BarraLateral'
import Afazeres from './container/Afazeres'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <BarraLateral></BarraLateral>
      </Container>
    </div>
  )
}

export default App
