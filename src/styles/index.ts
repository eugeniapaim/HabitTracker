import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
  }
`
export const Container = styled.div`
  background: #f1f3f1;
  display: grid;
  grid-template-columns: 0.6fr 8fr;
  grid-template-rows: auto;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
`
