import styled from 'styled-components'

export const StyledMain = styled.main`
  padding: ${({ theme }) => theme.space?.['2x']};
  margin: auto;
  max-width: ${({ theme }) => theme?.sizes?.xl};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`
