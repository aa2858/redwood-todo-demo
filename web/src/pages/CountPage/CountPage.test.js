import { render, cleanup } from '@testing-library/react'

import CountPage from './CountPage'

describe('CountPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CountPage />)
    }).not.toThrow()
  })
})
