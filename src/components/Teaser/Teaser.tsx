import { type ReactNode } from 'react'
import Rating from '@mui/material/Rating'
import {
  Name,
  StyledButton,
  StyledPlaceholderImage,
  StyledTeaser,
  StyledTeaserActions,
  StyledTeaserContent,
  StyledTeaserDescription,
  StyledTeaserDescriptionList,
  StyledTeaserDescriptionListItem,
  StyledTeaserDescriptionText,
  StyledTeaserDescriptionTitle,
  StyledTeaserImage,
  StyledTeaserImageWrapper,
  Value,
} from './Teaser.styles'
import { Sneaker } from '@/types'

interface TeaserProps extends Sneaker {
  children?: ReactNode
  className?: string
  style?: object
}

const Teaser = ({
  className,
  style,
  image,
  price,
  name,
  description,
  sizes,
  colors,
  rating,
}: TeaserProps) => {
  const handleClick = () => {
    console.log()
  }
  return (
    <StyledTeaser className={`Teaser ${className}`} style={style}>
      <StyledTeaserImageWrapper>
        <StyledTeaserImage src={image} alt={name} />
        <StyledPlaceholderImage
          src="/assets/images/placeholder.png"
          alt="placeholder"
        />
      </StyledTeaserImageWrapper>
      <StyledTeaserContent>
        <StyledTeaserDescription>
          {name && (
            <StyledTeaserDescriptionTitle>{name}</StyledTeaserDescriptionTitle>
          )}
          {description && (
            <StyledTeaserDescriptionText>
              {description}
            </StyledTeaserDescriptionText>
          )}

          <StyledTeaserDescriptionList>
            <StyledTeaserDescriptionListItem>
              <Name>Colors</Name>
              <Value>
                {colors?.map((color: string, index: number) => (
                  <span key={index}>{color}</span>
                ))}
              </Value>
            </StyledTeaserDescriptionListItem>
            <StyledTeaserDescriptionListItem>
              <Name>Price</Name>
              <Value>{price.usd}</Value>
            </StyledTeaserDescriptionListItem>
            <StyledTeaserDescriptionListItem>
              <Name>Sizes</Name>
              <Value>{sizes}</Value>
            </StyledTeaserDescriptionListItem>
            <StyledTeaserDescriptionListItem>
              <Name>Rating</Name>
              <Value>
                <Rating name="read-only" value={rating} readOnly />
              </Value>
            </StyledTeaserDescriptionListItem>
          </StyledTeaserDescriptionList>
        </StyledTeaserDescription>
        <StyledTeaserActions>
          <StyledButton onClick={handleClick}>Add to cart</StyledButton>
        </StyledTeaserActions>
      </StyledTeaserContent>
    </StyledTeaser>
  )
}

export default Teaser
