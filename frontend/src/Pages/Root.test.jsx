import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Root from './Root'
import About from './About'
import Adopt from './Adopt'
import { Provider } from 'react-redux'
import store from '../store'
import { http, HttpResponse } from 'msw'
import { server } from '../mocks/server'
import { act } from 'react-dom/test-utils'
import ContactUs from './ContactUs'


let modalRoot;

beforeEach(() => {
  // Create a div that we can attach the modal to.
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'overlay');
  document.body.appendChild(modalRoot);

  window.scroll = () => {};
});

afterEach(() => {
  // Clean up on exiting
  document.body.removeChild(modalRoot);
  modalRoot = null;
});

test("renders Home page", () => {

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Root />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

  // check if Header is rendered
  const header = screen.getByRole("banner")
  expect(header).toBeVisible()

  // check if main tag is rendered
  const main = screen.getByRole("main")
  expect(main).toBeInTheDocument();

  // check if About page is rendered
  const aboutPage = screen.getByTestId("about-page")
  expect(aboutPage).toBeInTheDocument();

  // check if Footer was rendered
  const footer = screen.getByRole("contentinfo")
  expect(footer).toBeInTheDocument();

})

test("renders Adopt page", () => {

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Root />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/adopt"
            element={<Adopt />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

  // get the adopt button
  const adopt = screen.getByTestId('adopt-link')

  // go to the adopt page
  act(() => {
    userEvent.click(adopt);
  });

  // check if Header is rendered
  const header = screen.getByRole("banner")
  expect(header).toBeVisible()

  // check if main tag is rendered
  const main = screen.getByRole("main")
  expect(main).toBeInTheDocument();

  // check if Adopt page is rendered
  const adoptPage = screen.getByTestId("adopt-page")
  expect(adoptPage).toBeInTheDocument();

  // check if Footer was rendered
  const footer = screen.getByRole("contentinfo")
  expect(footer).toBeInTheDocument();

})


test("handles error from server", async () => {

  // we override the default mock handler to return an error
  server.resetHandlers(
    http.get("/api/rabbits/", () => {
      return new HttpResponse(null, {status: 500});
    })
  )
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Root />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/adopt"
            element={<Adopt />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

  // get the adopt button
  const adopt = screen.getByTestId('adopt-link')
  
  // go to the adopt page
  act(() => {
    userEvent.click(adopt);
  });

  // wait for the error message to appear
  const errorMsg = await screen.findByRole("heading", { name: /error/i });

  // there should be an error message modal with the heading: ERROR
  expect(errorMsg).toBeInTheDocument();

});


test("renders Contact Us page", async () => {

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Root />
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

  // get the contact us button
  const contactUs = screen.getByRole('link', { name: /contact/i })

  // go to the contact-us page
  act(() => {
    userEvent.click(contactUs);
  });

  // check if Header is rendered
  const header = screen.getByRole("banner")
  expect(header).toBeVisible()

  // check if main tag is rendered
  const main = screen.getByRole("main")
  expect(main).toBeInTheDocument();

  // check if Contact Us page is rendered
  const contactUsPage = screen.getByTestId("contact-us-page")
  expect(contactUsPage).toBeInTheDocument();

  // check if Footer was rendered
  const footer = screen.getByRole("contentinfo")
  expect(footer).toBeInTheDocument();

})