import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import { getSingleEmployee } from '../../data/serviceTicketsData';
import { useParams } from 'react-router-dom';

export default function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployees] = useState(null);

  useEffect(() => {
    getSingleEmployee(id).then(setEmployees)
  }, [id])

  if(!employee) {
    return null
  }

  return (
    <div>
      <Table>
        <tbody>
          <tr>
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
      <h2>{employee.name}'s Assigned Service Tickets</h2>
        {employee?.serviceTickets.map((e) => (
      <div key={`employee-${e.id}`}>
      <Table>
            <tbody>
              <tr>
                <th scope="row">Customer</th>
                <td>{e.customerId}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{e.description}</td>
              </tr>
              <tr>
                <th scope="row">Emergency</th>
                <td>{e.emergency ? "yes" : "no"}</td>
              </tr>
              <tr>
                <th scope="row">Completed?</th>
                <td>{e.dateCompleted?.split("T")[0] || "Incomplete"}</td>
              </tr>
            </tbody>
          </Table>
          <br />
          </div>
        ))}
    </div>
  )
}
