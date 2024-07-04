import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Country from '../components/button/Country';
import countriesData from '../../src/data/countries.json';
import { describe, expect, it } from 'vitest';

describe('Country Component', () => {
  it('renders Country component and checks if options are loaded', () => {
    render(<Country />)
    
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
    
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(countriesData.countries.length + 1)
    countriesData.countries.forEach((country) => {
      expect(screen.getByText(country.es_name)).toBeInTheDocument()
    })
  })

  it('selects a city and checks the state', () => {
    render(<Country />)
    
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Afghanistan' } })
    
    expect(selectElement.value).toBe('Afghanistan')
  })
})