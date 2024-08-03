import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getSingleCustomer } from '../../data/serviceTicketsData';

export default function CustomerDetail() {
  const {id} = useParams();
  const [customer, setCustomer] = useState(null);
// const [customerTickets, setCustomerTicket] = useState([])


useEffect(() => {
  getSingleCustomer(id).then(setCustomer);
}, [id]);

if ( !customer) {
  return null;
}

  return (
    <>
    <Table>
      <tbody>
      <tr>
          <th scope='row'>Name</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope='row'>Address</th>
          <td>{customer.address}</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h2>{customer?.name}'s Service Ticket(s)</h2>
    {customer?.serviceTickets.map((ct) => (
      <div key={`customer-${ct.id}`}>
      <Table >
        <tbody>
          <tr>
            <th scope="row">Description</th>
            <td>{ct.description}</td>
          </tr>
          <tr>
            <th scope="row">Emergency</th>
            <td>{ct.emergency ? "yes" : "no"}</td>
          </tr>
          <tr>
            <th scope="row">Employee</th>
            <td>{ct.employee?.name || "Unassigned"}</td>
          </tr>
          <tr>
            <th scope="row">Completed?</th>
            <td>{ct.dateCompleted?.split("T")[0] || "Incomplete"}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      </div>
    ))}
    
    </>
  )
}
