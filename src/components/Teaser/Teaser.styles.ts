import Button from '@/components/Button/Button'
import styled from 'styled-components'
import Image from 'next/image'
import { Paper } from '@mui/material'

export const StyledTeaser = styled(Paper).attrs({
  elevation: 0,
})`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme?.borderRadius};
  overflow: hidden;
  align-items: stretch;
  border: 1px solid ${({ theme }) => theme.palette?.common?.frenchGray};

  &.MuiPaper-root:hover {
    border: 1px solid ${({ theme }) => theme.palette?.primary?.main};
  }
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
  z-index: 1;
  object-fit: cover;
`

export const StyledPlaceholderImage = styled(Image).attrs({
  width: 45,
  height: 45,
})`
  z-index: 0;
`

export const StyledTeaserContent = styled.div`
  padding: ${({ theme }) => theme?.space?.['1x']};
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  flex: 1 1 auto;
`

export const StyledTeaserTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme?.space?.['2']};
`

export const StyledTeaserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
`

export const StyledTeaserDescriptionTitle = styled.h4`
  font-size: ${({ theme }) => theme?.space?.['24']};
  font-weight: 700;
`
export const StyledTeaserDescriptionSubtitle = styled.h5``
export const StyledTeaserDescriptionText = styled.p`
  flex: 1 1 auto;
  padding-bottom: ${({ theme }) => theme?.space?.['8']};
`
export const StyledTeaserDescriptionList = styled.ul`
  flex: 0 0 auto;
`
export const StyledTeaserDescriptionListItem = styled.li`
  display: flex;
`
export const Name = styled.p`
  flex: 1 1 auto;
  font-weight: 700;
`
export const Value = styled.p`
  flex: 0 1 auto;
`
export const StyledTeaserActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 0 auto;
`

export const StyledButton = styled(Button)`
  margin-right: ${({ theme }) => theme?.space?.['2']};

  &:last-child {
    margin-right: 0;
  }
`
