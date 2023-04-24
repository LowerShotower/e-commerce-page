import { type ReactNode } from 'react'
import { StyledCart } from './Cart.styles'

interface CartProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Cart = ({ className, children, style }: CartProps) => {
  return (
    <StyledCart className={`Cart ${className}`} style={style}>
      {children}
    </StyledCart>
  )
}

export default Cart
