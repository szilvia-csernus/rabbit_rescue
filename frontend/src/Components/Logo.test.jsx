import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Logo } from './Logo'

test('renders rabbit logo', () => {
  render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  )
  const linkElement = screen.getByRole("link", { name: /logo/i} )
  expect(linkElement).toBeVisible()
})

