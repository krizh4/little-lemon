import { useEffect, useState } from "react"

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date ? new Date(date).getTime() : Date.now());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const BookingForm = ({ availableTimes, dispatch }) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState("");

  useEffect(() => {
    const data =fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', availableTimes: data })
  }, [date])

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      date,
      time,
      guests: parseInt(guests, 10),
      occasion
    };

    const status = submitAPI(reservation);

    if (status) {
      alert("Reservation made successfully!");
    }

    console.log("Reservation details:", reservation, `Status ${status}`);
    // Here you would typically send the reservation to your server or API
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  )
}

export default BookingForm