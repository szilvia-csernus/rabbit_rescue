import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('renders follow text', () => {
  render(<Footer />)
  const linkElement = screen.getByRole("link", { name: /phone icon/i })
  expect(linkElement).toBeVisible()
})

