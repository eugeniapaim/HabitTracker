import MenuUsuario from './Nav/MenuUsuario'
import Pesquisa from './Nav/Pesquisa'
import { NavBarSup } from './styles'

export const NavBar = () => {
  return (
    <NavBarSup>
      <Pesquisa />
      <MenuUsuario />
    </NavBarSup>
  )
}
