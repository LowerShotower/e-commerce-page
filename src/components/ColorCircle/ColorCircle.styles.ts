import styled from 'styled-components'

export const StyledColorCircle = styled.div`
  border-radius: 200px;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.palette?.common?.frenchGray};
  background-color: ${({ color }) => `${color}`};
`
