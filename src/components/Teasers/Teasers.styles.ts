import styled from 'styled-components'

export const StyledTeasers = styled.div`
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex-basis: 33.33%;
    padding: 0 10px;
    margin-bottom: 20px;
  }
  @media (max-width: ${({ theme }) => theme.sizes?.lg}) {
    & > * {
      flex-basis: 50%;
    }
  }
  @media (max-width: ${({ theme }) => theme.sizes?.md}) {
    & > * {
      flex-basis: 100%;
    }
  }
`
