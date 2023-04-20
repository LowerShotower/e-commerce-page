import { type FunctionComponent, type ReactNode } from 'react'
import { StyledMain } from './Main.styles'

interface MainProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Main = ({ className, children, style }: MainProps) => {
  return (
    <StyledMain className={`Main ${className}`} style={style}>
      {children}
    </StyledMain>
  )
}

export default Main
