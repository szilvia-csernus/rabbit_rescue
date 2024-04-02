import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArticleLeft, ArticleRight } from './Article'

test('renders follow text', () => {
  render(
    <>
      <ArticleLeft>Left content</ArticleLeft>
      <ArticleRight>Right content</ArticleRight>
    </>
  )
  const articleLeft = screen.getByText(/Left content/i)
  const articleRight = screen.getByText(/Right content/i)
  expect(articleLeft).toBeVisible()
  expect(articleRight).toBeVisible()
  expect(articleLeft.className).toMatch(/article/i)
  expect(articleRight.className).toMatch(/article/i)
  expect(articleLeft).toHaveStyle({ 'display': 'flex' })
})

