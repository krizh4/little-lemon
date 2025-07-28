import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  });

  test('renders all form fields', () => {
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeInTheDocument();
  });

  test('renders available times in select', () => {
    const options = screen.getAllByRole('option');
    const timeOptions = options.map(option => option.textContent);
    expect(timeOptions).toEqual(expect.arrayContaining(mockTimes));
  });

  test('calls dispatch when date is changed', () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2025-08-01' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      selectedDate: '2025-08-01',
    });
  });

  test('updates guests input correctly', () => {
    const guestInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestInput, { target: { value: '4' } });

    expect(guestInput.value).toBe('4');
  });

  test('updates occasion select correctly', () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    expect(occasionSelect.value).toBe('Anniversary');
  });
});
