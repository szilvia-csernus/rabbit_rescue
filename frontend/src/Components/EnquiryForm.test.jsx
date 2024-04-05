import { test } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EnquiryForm from './EnquiryForm'
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

test('renders EnquiryForm and its elements into modal', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <EnquiryForm />
      </MemoryRouter>
    </Provider>
  )
  
  // Check that the title is visible
  const heading = screen.getByRole("heading", { name: /enquiry form/i })
  expect(heading).toBeVisible()

  // Check that the name input is visible
  const nameInput = screen.getByRole("textbox", { name: /name/i })
  expect(nameInput).toBeVisible()

  // Check that the email input is visible
  const emailInput = screen.getByRole("textbox", { name: /email/i })
  expect(emailInput).toBeVisible()

  // Check that the phone input is visible
  const phoneInput = screen.getByRole("textbox", { name: /phone/i })
  expect(phoneInput).toBeVisible()

  // Check that the message input is visible
  const messageInput = screen.getByRole("textbox", { name: /message/i })
  expect(messageInput).toBeVisible()

  // Check that the cancel button is visible
  const cancel = screen.getByRole("button", { name: /cancel/i })
  expect(cancel).toBeVisible()

  // Check that the send button is visible
  const send = screen.getByRole("button", { name: /send/i })
  expect(send).toBeVisible()
})

test('Enquiry form submission with insufficient data renders error messages', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <EnquiryForm />
      </MemoryRouter>
    </Provider>
  )

  // Get the send button
  const send = screen.getByRole("button", { name: /send/i })

  // Click the send button
    fireEvent.click(send);
  
  // Check that the title is visible, meaning the modal is still open
  const heading = screen.getByRole("heading", { name: /enquiry form/i })
  expect(heading).toBeVisible()

  // Check that the name error message is visible
  const nameError = screen.getByText(/please provide your name/i)

  // Check that the email error message is visible
  const emailError = screen.getByText(/please provide your email/i)
})