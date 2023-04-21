import styled from 'styled-components'

export const StyledColorCircle = styled.div`
  border-radius: 200px;
  width: 10;
  height: 10;
  border: 1px solid ${({ theme }) => theme.palette?.common?.white};
`
