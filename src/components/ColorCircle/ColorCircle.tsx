import { type FunctionComponent, type ReactNode } from 'react'
import { StyledColorCircle } from './ColorCircle.styles'

interface ColorCircleProps {
  children?: ReactNode
  className?: string
  style?: object
}

const ColorCircle = ({ className, children, style }: ColorCircleProps) => {
  return (
    <StyledColorCircle className={`ColorCircle ${className}`} style={style}>
      {children}
    </StyledColorCircle>
  )
}

export default ColorCircle
