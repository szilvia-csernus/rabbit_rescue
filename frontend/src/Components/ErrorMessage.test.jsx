import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
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

test('renders ErrorMessage modal', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ErrorMessage />
      </MemoryRouter>
    </Provider>
  )
  
  const heading = screen.getByRole("heading", { name: /error/i })
  
  expect(heading).toBeVisible()
  
})