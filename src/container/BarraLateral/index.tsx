import * as S from './styles'
import * as I from '../../components/IconesMenu'

const BarraLateral = () => {
  return (
    <S.BarraLateral>
      <S.Logo viewBox="0 0 64 64">
        <rect width="64" height="64" rx="32" fill="#111111" />
        <path
          d="M26.3125 37.6875L30.375 26.3125M31.1875 37.6875L35.25 26.3125M36.0625 37.6875L40.125 26.3125"
          stroke="white"
          strokeWidth="1.95"
          strokeLinecap="round"
        />
      </S.Logo>
      <S.MenuOpcoes>
        <S.Icone>
          <S.MenuOpcoes>
            <S.Icone>
              <S.ListaIcones>
                <S.ItemIcone>
                  <I.Grid />
                </S.ItemIcone>
                <S.ItemIcone>
                  <I.Tarefa />
                </S.ItemIcone>
                <S.ItemIcone>
                  <I.Calendario />
                </S.ItemIcone>
                <S.ItemIcone>
                  <I.Estatisticas />
                </S.ItemIcone>
                <S.ItemIcone>
                  <I.Trofeu />
                </S.ItemIcone>
              </S.ListaIcones>
            </S.Icone>
          </S.MenuOpcoes>
        </S.Icone>
      </S.MenuOpcoes>
    </S.BarraLateral>
  )
}

export default BarraLateral
