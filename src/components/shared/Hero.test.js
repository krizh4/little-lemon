// Hero Unit Tests
import '@testing-library/jest-dom';
import Hero from './Hero';
import { render, screen } from '@testing-library/react';

describe('Hero component', () => {
  test('renders the title correctly', () => {
    render(<Hero />);
    const titleElement = screen.getByText(/Little Lemon/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the subtitle correctly', () => {
    render(<Hero />);
    const subtitleElement = screen.getByText(/Chicago/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders the description paragraph', () => {
    render(<Hero />);
    const descriptionElement = screen.getByText(/Lorem ipsum/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the hero image', () => {
    render(<Hero />);
    const image = screen.getByAltText(/Delicious food/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/hero-img.png');
  });

  test('renders the reserve button text', () => {
    render(<Hero />);
    const buttonText = screen.getByText(/Reserve a Table/i);
    expect(buttonText).toBeInTheDocument();
  });
});