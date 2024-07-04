import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import Home from '../pages/Home'

import LandingText from "../components/landing/LandingText";

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