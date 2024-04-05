import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, ButtonDonate, ButtonFeature, ButtonGeneral, ButtonSecondary } from './Buttons'

test('renders Button', () => {
  render(<Button />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('renders ButtonDonate', () => {
  render(<ButtonDonate />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('renders ButtonFeature', () => {
  render(<ButtonFeature />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('renders ButtonGeneral', () => {
  render(<ButtonGeneral />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('renders ButtonSecondary', () => {
  render(<ButtonSecondary />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})