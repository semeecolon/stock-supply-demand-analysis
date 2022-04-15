import { render, screen } from '@testing-library/react';
import About from '@/pages/about';

describe('About', () => {
  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      //name: /welcome to next\.js!/i
      name: /hello next world!/i
    });

    expect(heading).toBeInTheDocument();
  });
});
