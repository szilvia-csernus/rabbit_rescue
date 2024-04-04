import { test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Burger } from './Burger'
import { Provider } from 'react-redux'
import store from '../store'

test('renders Burger', () => {
  render(
    <Provider store={store}>
        <Burger />
    </Provider>
  )

  // find the burger button
  const burgerButton = screen.getByRole("button", { name: /burger/i })

  // check if the button is visible
  expect(burgerButton).toBeVisible()

})

test('Burger icon click flow', () => {

  render(
    <Provider store={store}>
        <Burger />
    </Provider>
  )

  // find the burger button
  const burgerButton = screen.getByRole("button", { name: /burger/i })

  // click the button
  fireEvent.click(burgerButton);

  // check if burger state is true
  expect(store.getState().burger).toBe(true);

  // click the button again
  fireEvent.click(burgerButton);

  // check if burger state is false
  expect(store.getState().burger).toBe(false);

})

