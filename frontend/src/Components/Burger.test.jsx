import { test } from 'vitest'
import { render, screen, getRoles } from '@testing-library/react'
import { Burger } from './Burger'
import { Provider } from 'react-redux'
import store from '../store'

test('renders Burger', () => {
  const { container } = render(
    <Provider store={store}>
        <Burger />
    </Provider>
  )
  console.log(getRoles(container))
  const burgerButton = screen.getByRole("button", { name: /burger/i })
  expect(burgerButton).toBeVisible()
})

