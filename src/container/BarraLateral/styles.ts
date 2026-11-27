import styled from 'styled-components'

export const BarraLateral = styled.aside`
  width: 64px;
  height: 100vh;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const MenuOpcoes = styled.nav`
  background-color: #111111;
  width: 100%;
  flex: 1;
  border-radius: 32px;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuInferior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListaIcones = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ItemIcone = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`

export const Logo = styled.svg`
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
  flex-shrink: 0;
`
