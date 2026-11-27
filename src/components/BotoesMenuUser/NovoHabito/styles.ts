import styled from 'styled-components'

export const NovoHabitoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 48px;
  padding: 0 28px;
  border: none;
  border-radius: 24px;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`
