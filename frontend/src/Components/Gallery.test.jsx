import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Gallery from './Gallery'
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

test('renders Gallery Component', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    </Provider>
  )
  
  // wait for the images to be rendered
  const images = await screen.findAllByRole("img", { src: /cloudinary/i })
  
  // there should be 16 images on the page
  expect(images).toHaveLength(16)
  
})