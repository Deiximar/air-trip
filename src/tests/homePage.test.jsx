import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach, suite } from "vitest";
import '@testing-library/jest-dom/vitest';
import Home from '../pages/Home'
import LandingText from "../components/landing/LandingText";
import { BrowserRouter } from "react-router-dom";
import GetCity from "../services/crudService";


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



describe('LandingText', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <LandingText />
            </BrowserRouter>
        );
    });

    it('should render the container with the class "containerText"', () => {
        const containerElement = document.querySelector('.containerText');
        expect(containerElement).toBeDefined();
    });

    it('should render title with class "textTitle"', () => {
        const titleElement = document.querySelector('.textTitle');
        expect(titleElement).toBeDefined();
    });

    it('should render the subtitle with class "textSubtitle"', () => {
        const subtitleElement = document.getElementsByClassName('textSubtitle');
        expect(subtitleElement).toBeDefined();
    });

    it('should render welcome paragraph with classes "welcomeText" and "text-gray"', () => {
        const welcomeTextElement = document.querySelector('.welcomeText.text-gray');
        expect(welcomeTextElement).toBeDefined();
    });

    it('should render the call to action button with the class "btnCta"', () => {
        const ctaButton = document.getElementsByClassName('btnCta');
        expect(ctaButton).toBeDefined();
    });
});



