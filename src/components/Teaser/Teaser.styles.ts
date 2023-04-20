import Button from '@/components/Button/Button'
import styled from 'styled-components'
import Image from 'next/image'
export const StyledTeaser = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette?.common?.black};

  align-items: stretch;
`

export const StyledTeaserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 180px;
  align-items: center;
  background-color: ${({ theme }) => theme.palette?.secondary?.main};
`

export const StyledTeaserImage = styled(Image).attrs({
  layout: 'fill',
})`
  object-fit: cover;
`

export const StyledPlaceholderImage = styled(Image).attrs({
  layout: 'fill',
})`
  object-fit: cover;
`

export const StyledTeaserContent = styled.div`
  padding: ${({ theme }) => theme?.space?.['1x']};
`

export const StyledTeaserTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme?.space?.['2']};
`

export const StyledTeaserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledTeaserDescriptionTitle = styled.h4`
  font-size: ${({ theme }) => theme?.space?.['24']};
  font-weight: 700;
`
export const StyledTeaserDescriptionSubtitle = styled.h5``
export const StyledTeaserDescriptionText = styled.p``
export const StyledTeaserDescriptionList = styled.ul``
export const StyledTeaserDescriptionListItem = styled.li``
export const Name = styled.span``
export const Value = styled.span``
export const StyledTeaserActions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledButton = styled(Button)`
  margin-right: ${({ theme }) => theme?.space?.['2']};

  &:last-child {
    margin-right: 0;
  }
`
