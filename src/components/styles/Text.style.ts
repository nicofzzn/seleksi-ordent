import styled from 'styled-components'

type TextType = { large: boolean; bold: boolean; color: string }

const Text = styled.p.attrs(({ large, bold, color }: TextType) => ({
  large,
  bold,
  color,
}))`
  font-family: 'DM Sans', sans-serif;
  font-size: ${props => (props.large ? '24px' : '12px')};
  line-height: ${props => (props.large ? '31px' : '15px')};
  font-weight: ${props => (props.bold ? '700' : '400')};
  color: ${props => props.color};
  margin: 10px 5px;
`

export default Text
