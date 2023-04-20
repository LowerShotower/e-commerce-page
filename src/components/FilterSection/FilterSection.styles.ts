import Checkbox from '@mui/material/Checkbox'
import styled from 'styled-components'

export const StyledFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-right: ${({ theme }) => theme?.space?.['1x']};
`

export const StyledFilterSectionTitle = styled.h3``

export const StyledFilterSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledFilterSectionContentItem = styled.div`
  padding: ${({ theme }) => `${theme?.space?.['1x']} ${theme?.space?.['1x']}`};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${({ theme }) => theme?.palette?.common.azure};
  margin-bottom: ${({ theme }) => `${theme?.space?.['1x']}`};
`

export const StyledColors = styled.div``

export const StyldColor = styled.div``

export const StyledCheckbox = styled(Checkbox)``

export const StyledCheckboxLabel = styled.label``
