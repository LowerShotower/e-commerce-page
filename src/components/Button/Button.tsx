import { type ReactNode } from 'react'
import { StyledButton } from './Button.styles'

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
