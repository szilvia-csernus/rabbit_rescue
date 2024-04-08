import { test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import About from '../Pages/About'
import Adopt from '../Pages/Adopt'
import ContactUs from '../Pages/ContactUs'
import { act } from 'react-dom/test-utils';
import Header from './Header'


test('renders Header', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  )
  const header = screen.getByRole("banner")
  const logo = screen.getByRole("link", { name: /rabbit rescue/i })
  const navigation = screen.getByRole("navigation", { name: /main navigation/i })
  const burger = screen.getByRole("button", { name: /burger menu icon/i })
  
  expect(header).toBeVisible()
  expect(logo).toBeVisible()
  expect(navigation).toBeVisible()
  expect(burger).toBeVisible()
})

test('Adopt link click flow', async () => {
  window.scroll = () => {};
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
      <Header />
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
  
  // find the adopt link
  const adoptLink = screen.getByTestId("adopt-link")

  // click the link
  await act(async () => {
    fireEvent.click(adoptLink);
  });

  // check if the Adopt component is rendered
  const adoptText = await screen.findByText(/our latest arrivals/i);
  expect(adoptText).toBeInTheDocument();

})

test('Contact Us link click flow', async () => {
  window.scroll = () => {};
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
      <Header />
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
  
  // find the contact us link
  const contactUsLink = screen.getByTestId("cotact-us-link")

  // click the link
  await act(async () => {
    fireEvent.click(contactUsLink);
  });

  // check if the Cotact Us component is rendered
  const contactUsText = await screen.findByRole("heading", {name: /how to find us/i});
  expect(contactUsText).toBeInTheDocument();

})

test('Rabbit Logo link click flow', async () => {
  globalThis.scroll = () => {};
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/contact-us']}>
        <Header />
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
  
  // find the rabbit logo link
  const logo = screen.getByRole("link", {name: /rabbit rescue logo/i})

  // click the link
  await act(async () => {
    fireEvent.click(logo);
  });

  // check if the Home page is rendered
  const homeText = await screen.findByText(/could you offer/i);
  expect(homeText).toBeInTheDocument();

})