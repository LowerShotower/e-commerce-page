import { type ReactNode } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonVariant } from '@/types'

interface ButtonProps {
  children?: ReactNode
  className?: string
  style?: object
  onClick?: () => void
  variant?: ButtonVariant
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
