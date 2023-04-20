import { Button } from '@mui/material'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root.MuiButton-text {
    color: ${({ theme }) => theme?.palette?.secondary?.main};
  }
`
