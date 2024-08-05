import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {
  createServiceTicket,
  getCustomers,
  getEmployees,
} from "../../data/serviceTicketsData";
import { useNavigate } from "react-router-dom";
// import { useParams, useRouteError, useRoutes } from 'react-router-dom';

const intialValue = {
  description: "",
  emergency: false,
  employeId: 0,
  customerId: 0,
  dateCompleted: null,
};

export default function CreateTicket() {
  const [formInput, setFormInput] = useState(intialValue);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput };
    createServiceTicket(payload).then(() => {
      navigate(`/tickets`);
    });
  };

  useEffect(() => {
    getEmployees().then(setEmployees);
    getCustomers().then(setCustomers);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {/* Pick an Customer */}
      <FormGroup>
        <Label for="customer">Pick a Customer</Label>
        <Input
          type="select"
          id="customer"
          name="customerId"
          onChange={handleChange}
          value={formInput.customerId}
          required
        >
          <option value="" hidden>
            Assaign a Customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      {/* Description */}
      <FormGroup>
        <Label>Description</Label>
        <Input
          type="textarea"
          placeholder="Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>

      {/* Pick an Employee */}
      <FormGroup>
        <Label for="employee">Pick an Employee</Label>
        <Input
          type="select"
          id="employee"
          name="employeeId"
          onChange={handleChange}
          value={formInput.employeeId}
        >
          <option value="" hidden>
            Assaign an Employee
          </option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      {/* Emergency */}
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="emergency"
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                emergency: e.target.checked,
              }));
            }}
            checked={formInput.emergency}
          />
          {""}
          Emergency
        </Label>
      </FormGroup>

      <div className="text-center">
        <Button type="submit">Create Service Ticket</Button>
      </div>

    </Form>
  );
}
