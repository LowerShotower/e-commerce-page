import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import styled from 'styled-components'

export const StyledFilterSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledFilterSectionTitle = styled.h3``

export const StyledFilterSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledFilterSectionContentItem = styled(Paper).attrs({
  elevation: 0,
})`
  padding: ${({ theme }) => `${theme?.space?.['1x']} ${theme?.space?.['1x']}`};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: ${({ theme }) => `${theme?.space?.['1x']}`};
  border-radius: ${({ theme }) => theme?.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette?.common?.frenchGray};
`

export const StyledColors = styled.div``

export const StyldColor = styled.div``

export const StyledCheckbox = styled(Checkbox)``

export const StyledCheckboxLabel = styled.label``
