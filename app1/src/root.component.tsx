import { useState, useEffect } from "react";
import { state1, state2, Button, EventList } from "@verint/utility";



export default function Root(props) {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const subscription = state2.subscribe((data: any) => {
      console.log("Received data: ", data);

      if (typeof data === 'string') {
        setEvents((prevEvents) => [...prevEvents, data]);
      } else {
        console.error("Expected string:", data);
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const sendEvent = () => {
    state1.next(`Hello from app1 ${new Date().toString()}`);
  };

  return (
    <section>
      {props.name} is mounted!
      <br />
      <Button onClick={sendEvent} label={"Send Event"} />
      <h4>Messages from App2</h4>
      <EventList events={events} />
    </section>
  );
}
