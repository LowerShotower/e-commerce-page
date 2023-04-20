import styled from 'styled-components'

export interface IStyledTitle {
  variant: '4' | '8' | '12' | '16' | '20' | '24'
}

export const StyledTitle = styled.h3<IStyledTitle>`
  font-size: ${({ variant, theme }) => theme.space?.[variant]};
`
