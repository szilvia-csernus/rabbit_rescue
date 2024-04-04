import { test } from 'vitest'
import { render, screen, getRoles } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar'
import { Provider } from 'react-redux'
import store from '../store'

test('renders rabbit logo', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    </Provider>
  )
  console.log(getRoles(container))
  const aboutLink = screen.getByRole("link", { name: /about/i })
  const adoptLink = screen.getByRole("link", { name: /adopt/i })
  const contactLink = screen.getByRole("link", { name: /contact/i })
  const donateButton = screen.getByRole("button", { name: /donate/i })
  expect(aboutLink).toBeVisible()
  expect(adoptLink).toBeVisible()
  expect(contactLink).toBeVisible()
  expect(donateButton).toBeVisible()
})

