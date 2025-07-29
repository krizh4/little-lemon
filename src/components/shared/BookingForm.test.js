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


const mockDispatch = jest.fn();
const mockAvailableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  });

  test("renders date input and updates value", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();

    fireEvent.change(dateInput, { target: { value: "2025-08-01" } });
    expect(dateInput.value).toBe("2025-08-01");
  });

  test("renders time select and updates value", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();

    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    expect(timeSelect.value).toBe("18:00");
  });

  test("renders guests input and updates value", () => {
    const guestInput = screen.getByLabelText(/number of guests/i);
    expect(guestInput).toBeInTheDocument();

    fireEvent.change(guestInput, { target: { value: "5" } });
    expect(guestInput.value).toBe("5");
  });

  test("renders occasion select and updates value", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();

    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
    expect(occasionSelect.value).toBe("Anniversary");
  });

  test("submits form with valid data", () => {
    window.alert = jest.fn();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-08-01" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(window.alert).toHaveBeenCalledWith("Reservation made successfully!");
  });
});

