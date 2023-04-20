import { type FunctionComponent, type ReactNode } from 'react'
import { StyledTeasers } from './Teasers.styles'

interface TeasersProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Teasers = ({ className, children, style }: TeasersProps) => {
  return (
    <StyledTeasers className={`Teasers ${className}`} style={style}>
      {children}
    </StyledTeasers>
  )
}

export default Teasers
