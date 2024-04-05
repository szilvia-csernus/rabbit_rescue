import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import Modal from './Modal'

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

test('renders Modal', () => {
  render(
    <Provider store={store}>
      <Modal>
        <h1>Modal Test Node</h1>
      </Modal>
    </Provider>
  )
  
  const heading = screen.getByRole("heading", { name: /modal test node/i })
  
  expect(heading).toBeVisible()
  
})