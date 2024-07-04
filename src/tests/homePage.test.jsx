import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import '@testing-library/jest-dom/vitest';
import Home from '../pages/Home'
import Country from "../components/button/Country";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

vi.mock('../components/landing/LandingText', () => ({
    default: () => <div>LandingText</div>
}));

describe('Testing home page', () =>{
    it('should render landing text and image', () =>{
        render(<Home />);

        expect(screen.getByText('LandingText')).toBeInTheDocument();
        
        const image = screen.getByAltText('family');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '\\assets\\images\\undraw_family_vg76.svg');
    })
})

vi.mock('../../data/countries.json', ()=> ({
    countries: [
        {name: 'argentina', es_name: 'Argentina'},
        {name: 'brasil', es_name:'Brasil'},
        {name: 'chile', es_name: 'Chile'}
    ]
}));

describe('testing country component', () =>{
    beforeEach(()=> {
        vi.resetAllMocks();
    });
    it('should render country selector and handles selection', () =>{
        render(<Country/>);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toHaveValue('');

        expect(screen.getByText('PAIS')).toBeInTheDocument();
        expect(screen.getByText('Argentina')).toBeInTheDocument();
        expect(screen.getByText('Brasil')).toBeInTheDocument();
        expect(screen.getByText('Chile')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('combobox'), {target: {value: 'argentina'}});
        expect(screen.getByRole('combobox')).toHaveValue('argentina');
    })
})