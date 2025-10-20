import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('should render with the correct placeholder', () => {
    const placeholder = 'Nunca dejes de buscar';
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} value='' onChange={() => {}} />,
    );

    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange handler when input changes', async () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(<Input onChange={handleChange} value='input' />);

    const inputElement = getByDisplayValue('input') as HTMLInputElement;
    const newValue = 'New value';
    fireEvent.change(inputElement, { target: { value: newValue } });

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: newValue } }),
    );
  });
});
