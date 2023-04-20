import { type FunctionComponent, type ReactNode } from 'react'
import { IStyledTitle, StyledTitle } from './Title.styles'

interface TitleProps extends IStyledTitle {
  children?: ReactNode
  className?: string
  style?: object
}

const Title = ({ className, children, variant, style }: TitleProps) => {
  return (
    <StyledTitle
      variant={variant}
      className={`Title ${className}`}
      style={style}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
