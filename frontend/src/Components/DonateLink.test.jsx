import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import  DonateLink from './DonateLink'

test('renders DonateLink', () => {
  render(<DonateLink />)
  const link = screen.getByRole('link', { name: /stripe/i})
  expect(link).toBeInTheDocument()
})