import { useState, type ReactNode } from 'react'
import { StyledSearchSection } from './SearchSection.styles'
import Input from '../Input/Input'

interface SearchSectionProps {
  children?: ReactNode
  className?: string
  style?: object
  onChange?: (value: string) => void
}

const SearchSection = ({ className, style, onChange }: SearchSectionProps) => {
  const [search, setSearch] = useState<string>('')

  const handleChange = (e) => {
    setSearch(e.target.value)
    onChange?.(e.target.value)
  }
  return (
    <StyledSearchSection className={`SearchSection ${className}`} style={style}>
      <Input
        placeholder="Search..."
        value={search}
        className="w-full"
        onChange={handleChange}
      />
    </StyledSearchSection>
  )
}

export default SearchSection
