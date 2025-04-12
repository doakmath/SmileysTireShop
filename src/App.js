import React from 'react';
import './App.css';

function App() {
  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps?q=1000+E+Pierce+St,+Luling,+TX,+78648',
      '_blank'
    );
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Smiley's Tire Shop</h1>

      <div className="btn-group m-3">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </button>
        <ul className="dropdown-menu">
          <li><span className="dropdown-item">XXXXXXX</span></li>
          <li><span className="dropdown-item">XXXXXXX</span></li>
          <li><span className="dropdown-item">XXXXXXX</span></li>
        </ul>
      </div>

      <div className="btn-group m-3">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Reviews
        </button>
        <ul className="dropdown-menu">
          <li><span className="dropdown-item">XXXXXXX</span></li>
          <li><span className="dropdown-item">XXXXXXX</span></li>
          <li><span className="dropdown-item">XXXXXXX</span></li>
        </ul>
      </div>

      <div className="m-4">
        <button className="btn btn-success" onClick={handleMapClick}>
          📍 Find Us on Google Maps
        </button>
      </div>
    </div>
  );
}

export default App;
