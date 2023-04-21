import styled from 'styled-components'

export const StyledOrderingSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: ${({ theme }) => theme.space?.['1x']};
  & > * {
    margin-right: ${({ theme }) => theme.space?.['1x']};
  }
  &:last-child {
    margin-right: 0;
  }
`
