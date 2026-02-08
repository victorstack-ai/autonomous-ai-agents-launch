/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import LandingPage from './page'

// Mock framer-motion to avoid issues with animations in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, initial, animate, transition, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, whileHover, initial, animate, transition, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, whileHover, initial, animate, transition, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

test('renders landing page with main headline', () => {
  render(<LandingPage />)
  const headings = screen.getAllByText(/AI.COM/i)
  expect(headings.length).toBeGreaterThan(0)
  expect(headings[0]).toBeInTheDocument()
})

test('renders CTA button', () => {
  render(<LandingPage />)
  const ctaButtons = screen.getAllByRole('link', { name: /Get Started/i })
  expect(ctaButtons.length).toBeGreaterThan(0)
})