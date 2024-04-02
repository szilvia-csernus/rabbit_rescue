import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Article, ArticleLeft, ArticleRight } from './Article'

test('renders follow text', () => {
  render(
    <>
      <Article>Follow us on social media</Article>
      <ArticleLeft>Left content</ArticleLeft>
      <ArticleRight>Right content</ArticleRight>
    </>
  )
  const article = screen.getByText(/Follow us on social media/i)
  const articleLeft = screen.getByText(/Left content/i)
  const articleRight = screen.getByText(/Right content/i)

  expect(article).toBeVisible()
  expect(articleLeft).toBeVisible()
  expect(articleRight).toBeVisible()

  expect(articleLeft.className).toMatch(/article/i)
  expect(articleRight.className).toMatch(/article/i)
  
  expect(article).toHaveStyle({ 'display': 'flex' })
})

