import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  const text = 'Click me!';

  it('should render with the correct text', () => {
    render(<Button>{text}</Button>);

    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{text}</Button>);

    const buttonElement = screen.getByText(text);
    fireEvent.click(buttonElement);

    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});
