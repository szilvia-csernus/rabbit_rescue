import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Container } from './Container'

test('renders Container', () => {
  render(<Container />)
  const conatiner = screen.getByTestId('container')
  expect(conatiner).toBeInTheDocument()
})