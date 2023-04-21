import { type ReactNode } from 'react'
import { StyledColorCircle } from './ColorCircle.styles'

interface ColorCircleProps {
  children?: ReactNode
  className?: string
  style?: object
  color?: string
}

const ColorCircle = ({
  className,
  children,
  style,
  color,
}: ColorCircleProps) => {
  return (
    <StyledColorCircle
      className={`ColorCircle ${className}`}
      color={color}
      style={style}
    >
      {children}
    </StyledColorCircle>
  )
}

export default ColorCircle
