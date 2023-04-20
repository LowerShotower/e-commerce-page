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
  @media (max-width: 768px) {
    & > * {
      flex-basis: 50%;
    }
  }
`
