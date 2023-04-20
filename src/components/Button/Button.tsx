import { type FunctionComponent, type ReactNode } from 'react'
import { StyledButton } from './Button.styles'
import { ExtendButtonBase } from '@mui/material/ButtonBase'
import {
  ButtonPropsVariantOverrides,
  ButtonTypeMap,
} from '@mui/material/Button'

interface ButtonProps {
  children?: ReactNode
  className?: string
  style?: object
  onClick?: () => void
  variant?: 'text' | 'outlined' | 'contained'
}

const Button = ({ className, children, style, ...otherProps }: ButtonProps) => {
  return (
    <StyledButton
      className={`Button ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

export default Button
