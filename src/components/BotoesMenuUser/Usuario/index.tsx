import { AvatarButton } from './styles'

type Props = {
  nome: string
}

const Avatar = ({ nome }: Props) => {
  return (
    <AvatarButton type="button" aria-label="Menu do usuário">
      {nome.charAt(0).toUpperCase()}
    </AvatarButton>
  )
}

export default Avatar
