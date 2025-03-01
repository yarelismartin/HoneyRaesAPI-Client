import { Link, Outlet } from "react-router-dom";
// import { Button } from "reactstrap";

export default function ServiceTickets() {
  return (
    <>
      <h2>Service Tickets</h2>
      <Link to="/tickets/create">Add</Link>
      <br />
      {/* Outlet is essential for displaying the nested routes within the parent component (ServiceTickets) */}
      <Outlet />
    </>
  );
}
