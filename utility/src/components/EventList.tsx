import React from 'react';

interface EventListProps {
  events: string[]; 
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  if (events.length === 0) {
    return null;
  }
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
};

export default EventList;
