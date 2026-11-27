import NovoHabito from '../../../../components/BotoesMenuUser/NovoHabito'
import BotaoNotificacao from '../../../../components/BotoesMenuUser/Notificacoes'
import Avatar from '../../../../components/BotoesMenuUser/Usuario'
import { Container } from '../../../../styles'

const MenuUsuario = () => {
  return (
    <Container>
      <NovoHabito />
      <BotaoNotificacao />
      <Avatar nome="Rafael" />
    </Container>
  )
}

export default MenuUsuario
