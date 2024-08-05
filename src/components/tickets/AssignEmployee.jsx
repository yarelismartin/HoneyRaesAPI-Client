import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployees, getSingleTicket, updateTicket } from '../../data/serviceTicketsData';
import { Button, Table } from 'reactstrap';

export default function AssignEmployee() {
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const handleClick = (employee) => {
   if (window.confirm(`Are you sure you want to assign this employee ?`)) {
     getSingleTicket(id).then((ticket) => {
       const payload = { ...ticket, employeeId: employee};
       updateTicket(id, payload).then(navigate(`/tickets/${id}`))
     });
   }
  }

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, [])

  
  return (
    <div>
    {employees.map((employee) => (
      <>
      <br />
      <Table >
        <tbody>
        <tr>
            <th>
            <Button onClick={() => handleClick(employee.id)}>
                Assaign {employee.name}
              </Button>
            </th>
            <td>
            </td>
          </tr>
          <tr key={employee.id}>
            <th scope='row'>Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope='row'>Specialty</th>
            <td>{employee.specialty}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      </>
    ))}
    </div>
  )
}
