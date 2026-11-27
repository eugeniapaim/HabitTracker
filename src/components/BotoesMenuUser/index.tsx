import { Botao } from './styles'

export const NovoHabito = () => {
  return (
    <Botao>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      Novo hábito
    </Botao>
  )
}

export const Notificacao = () => {
  return (
    <Botao>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33333 17.5H11.6667M5 13.3333V9.16666C5 7.84058 5.52678 6.56881 6.46447 5.63113C7.40215 4.69345 8.67392 4.16666 10 4.16666C11.3261 4.16666 12.5979 4.69345 13.5355 5.63113C14.4732 6.56881 15 7.84058 15 9.16666V13.3333L16.25 15H3.75L5 13.3333Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#111111"
        />
      </svg>
    </Botao>
  )
}
