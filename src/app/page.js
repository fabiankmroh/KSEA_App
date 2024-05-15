// src/app/page.js
import { events } from './lib/data';

export default function Home() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h2>{event.name}</h2>
            <p>Type: {event.type}</p>
            <p>Date: {event.date.toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Points: {event.points}</p>
            <p>Note: {event.note}</p>
            <p>Register Link: {event.register_link}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}