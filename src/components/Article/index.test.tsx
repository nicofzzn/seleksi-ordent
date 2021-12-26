import { render, screen } from '@testing-library/react'
import Article from './index'
import { SummaryWrapper, Text } from './style'

const data = {
  title: 'title',
  cover: 'http://placeimg.com/600/400/nightlife',
  likes: 33,
  bookmarked: false,
  summary: 'summary',
}

it('should render title', () => {
  render(<Article article={data} index={0} />)

  const titleElement = screen.getByText(/title/i)

  expect(titleElement).toBeInTheDocument()
})

it('should render cover', () => {
  render(<Article article={data} index={0} />)

  const coverElement = screen.getByRole('img')

  expect(coverElement).toBeInTheDocument()
})

it('should render summary if there is available space in the article', () => {
  render(
    <SummaryWrapper lineClamp={1}>
      <Text>{data.summary}</Text>
    </SummaryWrapper>
  )

  const summaryElement = screen.getByText(/summary/i)

  expect(summaryElement).toBeInTheDocument()
})

it('should not render summary if there is no available space in the article', () => {
  render(
    <SummaryWrapper lineClamp={0}>
      <Text>{data.summary}</Text>
    </SummaryWrapper>
  )

  const summaryElement = screen.queryByText(/summary/i)

  expect(summaryElement).not.toBeVisible()
})

it('should render sponsored ad text if article index + 1 is prime number', () => {
  render(<Article article={data} index={10} />)

  const sponsoredAdElement = screen.getByText(/sponsored ad/i)

  expect(sponsoredAdElement).toBeInTheDocument()
})

it('should not render sponsored ad text if article index + 1 is not prime number', () => {
  render(<Article article={data} index={3} />)

  const sponsoredAdElement = screen.queryByText(/sponsored ad/i)

  expect(sponsoredAdElement).toBeFalsy()
})

it('should not render sponsored ad text if article index + 1 is prime number and less than 3', () => {
  render(<Article article={data} index={1} />)

  const sponsoredAdElement = screen.queryByText(/sponsored ad/i)

  expect(sponsoredAdElement).toBeFalsy()
})

it('should render likes count', () => {
  render(<Article article={data} index={0} />)

  const likesCountElement = screen.getByText(/33/i)

  expect(likesCountElement).toBeInTheDocument()
})

it('should render like icon', () => {
  render(<Article article={data} index={0} />)

  const likeIconElement = screen.getByTestId('likeIcon')

  expect(likeIconElement).toBeInTheDocument()
})

it('should render share icon', () => {
  render(<Article article={data} index={0} />)

  const shareIconElement = screen.getByTestId('shareIcon')

  expect(shareIconElement).toBeInTheDocument()
})

it('should render bookmarked icon if bookmarked is equal to true', () => {
  render(<Article article={{ ...data, bookmarked: true }} index={0} />)

  const bookmarkedIconElement = screen.getByTestId('bookmarkedIcon')
  const bookmarkIconElement = screen.queryByTestId('bookmarkIcon')

  expect(bookmarkedIconElement).toBeInTheDocument()
  expect(bookmarkIconElement).toBeFalsy()
})

it('should render bookmark icon if bookmarked is equal to false', () => {
  render(<Article article={{ ...data, bookmarked: false }} index={0} />)

  const bookmarkIconElement = screen.getByTestId('bookmarkIcon')
  const bookmarkedIconElement = screen.queryByTestId('bookmarkedIcon')

  expect(bookmarkIconElement).toBeInTheDocument()
  expect(bookmarkedIconElement).toBeFalsy()
})
