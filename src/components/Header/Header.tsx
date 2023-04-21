import { type ReactNode } from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import {
  StyledHeader,
  StyledLinks,
  StyledLogo,
  StyledLogoText,
} from './Header.styles'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Header = ({ className, style }: HeaderProps) => {
  return (
    <StyledHeader className={`Header ${className}`} style={style}>
      <Link href="./">
        <StyledLogo>
          <Image
            src="/assets/images/seaker6.png"
            width={80}
            height={80}
            alt="alt"
          />
          <StyledLogoText>SNEAKERS</StyledLogoText>
        </StyledLogo>
      </Link>

      <StyledLinks>
        <Link
          href="./"
          className="flex text-slate-100 p-1 text-lg items-center text-xl hover:bg-gray-900"
        >
          <LocalMallOutlinedIcon /> <span className="pl-2">Cart</span>
        </Link>
      </StyledLinks>
    </StyledHeader>
  )
}

export default Header
