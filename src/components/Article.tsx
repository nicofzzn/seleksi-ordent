import styled from 'styled-components'
import { ArticleType } from '../App'
import Cover from './styles/Cover.style'
import Text from './styles/Text.style'
import { ReactComponent as BookmarkIcon } from '../svg/bookmark.svg'
import { ReactComponent as BookmaredIcon } from '../svg/bookmarked.svg'
import { ReactComponent as LikeIcon } from '../svg/like.svg'
import { ReactComponent as ShareIcon } from '../svg/share.svg'
import isPrime from '../utils/isPrime'

const Container = styled.div`
  position: relative;
  width: 420px;
  height: 479px;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5px;
  width: 400px;
`

const LeftSideFooter = styled.div``

const RightSideFooter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: '50px';
`

const Article = ({ article, index }: { article: ArticleType; index: number }) => {
  return (
    <Container>
      <Cover src={article.cover} />
      <Text large>{article.title}</Text>
      <Text>{article.summary}</Text>
      <Footer>
        <LeftSideFooter>
          {isPrime(index + 1) && (
            <Text bold color={'#0D81ED'}>
              Sponsored Ad
            </Text>
          )}
        </LeftSideFooter>
        <RightSideFooter>
          <LikeWrapper>
            <Text bold>{article.likes}</Text>
            <LikeIcon />
          </LikeWrapper>
          {article.bookmarked ? <BookmaredIcon /> : <BookmarkIcon />}
          <ShareIcon />
        </RightSideFooter>
      </Footer>
    </Container>
  )
}

export default Article
