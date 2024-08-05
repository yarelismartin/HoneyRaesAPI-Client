import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getSingleTicket } from "../../data/serviceTicketsData";
import { Outlet } from "react-router-dom"; // Import Outlet

//import { getServiceTicket } from "../../data/serviceTicketsData";

export default function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getSingleTicket(id).then(setTicket)
  }, [id]);

  if (!ticket) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{ticket.customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{ticket.description}</td>
        </tr>
        <tr>
          <th scope="row">Emergency</th>
          <td>{ticket.emergency ? "yes" : "no"}</td>
        </tr>
        <tr>
          <th scope="row">Employee</th>
          <td>{ticket.employee?.name || <Link to="assign" ><Button style={{backgroundColor: "yellow", color: "black", border: "black 1px solid"}}>Assign Employee</Button></Link>}</td>
        </tr>
        <tr>
          <th scope="row">Completed?</th>
          <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
        </tr>
      </tbody>
    </Table>
  );
}
