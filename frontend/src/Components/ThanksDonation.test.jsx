import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ThanksDonation from './ThanksDonation'
import { Provider } from 'react-redux'
import store from '../store'

let modalRoot;

beforeEach(() => {
  // Create a div that we can attach the modal to.
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'overlay');
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  // Clean up on exiting
  document.body.removeChild(modalRoot);
  modalRoot = null;
});

test('renders ThanksDonation modal', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ThanksDonation />
      </MemoryRouter>
    </Provider>
  )
  
  const heading = screen.getByRole("heading", { name: /successful payment/i })
  
  expect(heading).toBeVisible()
  
})