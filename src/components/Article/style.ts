import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 420px;
  height: 479px;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const Footer = styled.div`
  padding: 8px 5px 15px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 390px;
  background-color: #fff;
`

export const RightSideFooter = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: '50px';
  column-gap: 10px;
`
export const Cover = styled.img`
  width: 400px;
  height: 267px;
  border-radius: 8px;
`

export const TitleWrapper = styled.div`
  padding: 5px 5px;
`

export const SummaryWrapper = styled.div.attrs(
  ({ lineClamp }: { lineClamp: number }) => ({
    lineClamp,
  })
)`
  display: ${props => (props.lineClamp > 0 ? '-webkit-box' : 'none')};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => (props.lineClamp > 0 ? props.lineClamp : 0)};
  overflow: hidden;
  height: ${props => `${props.lineClamp * 13}px`};
  padding: 5px 5px;
`

type TextVariantType = { large: boolean; bold: boolean; color: string }

export const Text = styled.p.attrs(({ large, bold, color }: TextVariantType) => ({
  large,
  bold,
  color,
}))`
  font-family: 'DM Sans', sans-serif;
  font-size: ${props => (props.large ? '24px' : '12px')};
  line-height: ${props => (props.large ? '31px' : '15px')};
  font-weight: ${props => (props.bold ? '700' : '400')};
  color: ${props => props.color};
  margin: 0px;
`
