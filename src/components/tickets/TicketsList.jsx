import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { closeServiceTicket, deleteSingleTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);
  
  const handleClick = (id) => {
    if(window.confirm(`Are you sure you want to delete service ticket ${id}?`)) {
    deleteSingleTicket(id).then(() => {
      getServiceTickets().then(setTickets);
    })
  }
  };

  const handleUpdate = (id) => {
      closeServiceTicket(id).then(() => {
        getServiceTickets().then(setTickets);
      });
  }


  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
          <th>Delete</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <Button style={{backgroundColor: "red", border: "none"}} onClick={() => handleClick(t.id)}>Delete</Button>
            </td>
            <td>
              { t.employeeId && t.dateCompleted == null && <Button onClick={() => handleUpdate(t.id)} style={{backgroundColor: "blue", border: "none"}} >Close</Button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
