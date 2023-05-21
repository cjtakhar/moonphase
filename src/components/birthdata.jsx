import React, { useState, useRef } from 'react';
import Image from "./images/thumbprint.jpg";
import './styles/bd.css';

const BirthData = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [location, setLocation] = useState("");
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(day, month, year, hour, minute, location);
    buttonRef.current.focus();
  }

  const handleDay = (e) => {
    setDay(e.target.value);
  }

  const handleMonth = (e) => {
    setMonth(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  const handleHour = (e) => {
    setHour(e.target.value);
  }

  const handleMinute = (e) => {
    setMinute(e.target.value);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const isDataEntered = day && month && year && hour && minute && location;

  return (
    <div className="bd-container">
      <div className="bd-intro">
        <h1 className="bd-title">You are cosmic.</h1>
        <p className="bd-paragraph">The fundamental particles that forged the universe are the intricate composition of our being. </p>
        <div className="bd-btn-container">
          {isDataEntered && (
            <>
              <button className="bd-form-btn" ref={buttonRef}> 
                <img src={Image} alt="cosmic thumbprint" />
              </button>
              <h2 className="btn-label">PRESS</h2>
            </>
          )}
        </div>
      </div>
      <form className="bd-form" onSubmit={handleSubmit}>
        <div className="first-container">
          <input className="bd-input" type="number" placeholder="Day" value={day} onChange={handleDay} />
          <input className="bd-input" type="number" placeholder="Month" value={month} onChange={handleMonth} />
          <input className="bd-input" type="number" placeholder="Year" value={year} onChange={handleYear} />
        </div>
        <div className="second-container">
          <input className="bd-input" type="number" placeholder="Hour" value={hour} onChange={handleHour} />
          <input className="bd-input" type="number" placeholder="Minute" value={minute} onChange={handleMinute} />
          <input className="bd-input" type="text" placeholder="Location" value={location} onChange={handleLocation} />
        </div>
      </form>
    </div>
  );
}

export default BirthData;

