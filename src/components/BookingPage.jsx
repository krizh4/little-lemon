import React from 'react'
import BookingForm from './shared/BookingForm'
import { useReducer } from 'react'

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00"];
};

const updateTimes = (state, action) => {
  // action.selectedDate is available here
  // In a real app, fetch available times based on the selected date
  return ["17:00", "18:00", "19:00"]; // dummy same list for now
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  )
}

export default BookingPage