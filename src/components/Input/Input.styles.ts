import styled from 'styled-components'

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.palette?.primary?.main};
  padding: ${({ theme }) => theme.space?.['8']};
`
