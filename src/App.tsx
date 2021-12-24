import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Article from './components/Article'

export type ArticleType = {
  title: string
  cover: string
  summary: string
  bookmarked: boolean
  likes: number
}

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2em;
`

function App() {
  const [articles, setArticles] = useState<Array<ArticleType>>([])

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/krsnadjava25/03728b7c53d50c1e8196aa52983aed69/raw/3ee4ca9bb8d490abc36043e5c9547040d12bdda1/articles.json'
    )
      .then(response => response.json())
      .then(data => setArticles(data))
  }, [])

  return (
    <Container>
      {articles.map((article, index) => (
        <Article key={index} index={index} article={article} />
      ))}
    </Container>
  )
}

export default App
