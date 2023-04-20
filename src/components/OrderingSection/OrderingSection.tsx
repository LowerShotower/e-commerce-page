import { type FunctionComponent, type ReactNode } from 'react'
import { StyledOrderingSection } from './OrderingSection.styles'
import Button from '../Button/Button'
import { SortEnum } from '@/types'

interface OrderingSectionProps {
  children?: ReactNode
  className?: string
  style?: object
  onOrderingChange: (type: SortEnum) => void
}

const OrderingSection = ({
  className,
  children,
  style,
  onOrderingChange,
}: OrderingSectionProps) => {
  const handleSortButtonClick = (type: SortEnum) => () => {
    console.log(type)
    onOrderingChange(type)
  }
  return (
    <StyledOrderingSection
      className={`OrderingSection ${className}`}
      style={style}
    >
      <Button
        variant="text"
        onClick={handleSortButtonClick(SortEnum.PriceLowToHigh)}
      >
        Price Low To High
      </Button>
      <Button
        variant="text"
        onClick={handleSortButtonClick(SortEnum.PriceHighToLow)}
      >
        Price High To Low
      </Button>
      <Button
        variant="text"
        onClick={handleSortButtonClick(SortEnum.PopularFirst)}
      >
        Popular First
      </Button>
      <Button
        variant="text"
        onClick={handleSortButtonClick(SortEnum.UnpopularFirst)}
      >
        Unpopular First
      </Button>
    </StyledOrderingSection>
  )
}

export default OrderingSection
