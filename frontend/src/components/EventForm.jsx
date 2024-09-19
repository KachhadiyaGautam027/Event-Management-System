import { useState } from 'react';
import { createEvent } from '../services/api';
// import './EventForm.css';

const EventForm = () => {
  const [eventData, setEventData] = useState({ title: '', description: '', date: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(eventData);
    setEventData({ title: '', description: '', date: '' });
  };

  return (
    <div className="event-form-wrapper">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter event title"
            value={eventData.title}
            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            placeholder="Enter event description"
            value={eventData.description}
            onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            value={eventData.date}
            onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
