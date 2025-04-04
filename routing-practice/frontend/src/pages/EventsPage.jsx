import { Link } from "react-router";

const events = [
  { id: 1, name: "event1" },
  { id: 2, name: "event2" },
  { id: 3, name: "event3" },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
