import { useRef, useEffect, useState } from 'react'
import { ArticleType } from '../../App'
import {
  Cover,
  Text,
  Container,
  Footer,
  RightSideFooter,
  LikeWrapper,
  SummaryWrapper,
  TitleWrapper,
} from './style'
import { ReactComponent as BookmarkIcon } from '../../svg/bookmark.svg'
import { ReactComponent as BookmaredIcon } from '../../svg/bookmarked.svg'
import { ReactComponent as LikeIcon } from '../../svg/like.svg'
import { ReactComponent as ShareIcon } from '../../svg/share.svg'
import isPrime from '../../utils/isPrime'
import getLineClamp from '../../utils/getLineClamp'

const Article = ({ article, index }: { article: ArticleType; index: number }) => {
  const [titleHeight, setTitleHeight] = useState<number>(0)
  const titleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.clientHeight)
    }
  }, [])

  return (
    <Container>
      <Cover src={article.cover} />
      <TitleWrapper>
        <Text ref={titleRef} large>
          {article.title}
        </Text>
      </TitleWrapper>
      <SummaryWrapper lineClamp={getLineClamp(titleHeight)}>
        <Text>{article.summary}</Text>
      </SummaryWrapper>
      <Footer>
        <div>
          {isPrime(index + 1) && (
            <Text bold color={'#0D81ED'}>
              Sponsored Ad
            </Text>
          )}
        </div>
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
