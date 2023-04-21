import { ChangeEvent, type ReactNode } from 'react'
import { StyledInput } from './Input.styles'

interface InputProps {
  children?: ReactNode
  className?: string
  style?: object
  onChange?: (e: ChangeEvent) => void
  value?: string
  placeholder?: string
}

const Input = ({ className, style, ...otherProps }: InputProps) => {
  return (
    <StyledInput
      className={`Input ${className}`}
      style={style}
      {...otherProps}
    />
  )
}

export default Input
