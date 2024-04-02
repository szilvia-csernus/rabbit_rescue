import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AdoptImage, HeroImage } from './MainImages'

test('renders main images for landing page and adopt page', () => {
  render(
    <MemoryRouter>
      <HeroImage />
      <AdoptImage />
    </MemoryRouter>
  )
  const heroImg = screen.getByRole("img", { name: /bunny/i} )
  const adoptImg = screen.getByRole("img", { name: /bunnies/i} )
  expect(heroImg).toBeVisible()
  expect(adoptImg).toBeVisible()
})

