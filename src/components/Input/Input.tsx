import { type FunctionComponent, type ReactNode } from 'react'
import { StyledInput } from './Input.styles'

interface InputProps {
  children?: ReactNode
  className?: string
  style?: object
  onChange?: (e) => void
  value?: string
}

const Input = ({ className, children, style, ...otherProps }: InputProps) => {
  return (
    <StyledInput
      className={`Input ${className}`}
      style={style}
      {...otherProps}
    />
  )
}

export default Input
