import React from 'react'
import BookingForm from './shared/BookingForm'
import { useReducer } from 'react'

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00"];
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return action.availableTimes;
  } else {
    return state;
  }
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