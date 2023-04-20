import styled from 'styled-components'
// px-5 flex flex-row justify-between items-center w-screen bg-gray-950
export const StyledHeader = styled.div`
  padding: ${({ theme: { space } }) => `${space?.['1x']} ${space?.['4x']}`};
  background-color: ${({ theme: { palette } }) => palette?.common?.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`

export const StyledLogo = styled.div`
  display: flex;

  align-items: center;
  color: ${({ theme: { palette } }) => palette?.common?.white};
  font-family: 'Tilt Prism', sans-serif;
`

export const StyledLogoText = styled.p`
  font-size: ${({ theme: { space } }) => space?.['4x']};
  font-weight: 500;
  line-height: 1;
  margin-left: ${({ theme: { space } }) => space?.['1x']};
`

export const StyledLogoSemiText = styled.p`
  margin-left: 10px;
  font-size: ${({ theme: { space } }) => space?.['1x']};
`

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Anuphan', sans-serif;
`
