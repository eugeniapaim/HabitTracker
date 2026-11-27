import styled from 'styled-components'

export const AvatarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: #9b8cf2;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`
