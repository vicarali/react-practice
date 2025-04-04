import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
