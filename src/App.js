import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import BookingPage from './components/BookingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
