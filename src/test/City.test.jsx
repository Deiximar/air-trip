import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import citiesData from '../data/cities.json';
import City from '../components/button/City';
import { describe, expect, it } from 'vitest';

describe('City Component', () => {
  it('renders City component and checks if options are loaded', () => {
    render(<City />)

    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(citiesData.cities.length + 1)
    citiesData.cities.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument()
    })
  })

  it('selects a city and checks the state', () => {
    render(<City />)

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'shanghai' } })

    expect(selectElement.value).toBe('shanghai')
  })
})