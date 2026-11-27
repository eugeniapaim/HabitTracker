import styled from 'styled-components'

export const WrapperPesquisa = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 280px;
  height: 44px;
  padding: 0 16px;
  border-radius: 22px;
  background: #ffffff;
  color: #5f6661;
`

export const IconeLupa = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #5f6661;
  flex-shrink: 0;
`

export const InputPesquisa = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #5f6661;
  font-size: 13px;

  &::placeholder {
    color: #5f6661;
    opacity: 0.85;
  }
`
