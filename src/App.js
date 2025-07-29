import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ConfirmationPage from './components/ConfirmationPage';

import BookingPage from './components/BookingPage';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [reservationData, setReservationData] = useState(null);

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservation" element={<BookingPage setData={setReservationData} />} />
          <Route path="/confirmation" element={<ConfirmationPage reservation={{ ...reservationData }} />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
