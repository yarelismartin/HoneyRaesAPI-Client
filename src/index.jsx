import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CreateTicket from "./components/tickets/CreateTicket";
import CustomerList from "./components/customers/CustomerList";
import CustomerDetail from "./components/customers/CustomerDetail";
import Customers from "./components/customers/Customers";
import Employees from "./components/employee/Employees";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeDetail from "./components/employee/EmployeeDetail";
import AssignEmployee from "./components/tickets/AssignEmployee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tickets" element={<ServiceTickets />}>
            <Route index element={<TicketsList />} />
            <Route path=":id" element={<TicketDetails />} />
            <Route path=":id/assign" element={<AssignEmployee />} />
            <Route path="create" element={<CreateTicket />} />
        </Route>
          <Route path="customers" element={<Customers />}>
            <Route index element={<CustomerList />} />
            <Route path=":id" element={<CustomerDetail />} />
          </Route>
          <Route path="employees" element={<Employees />}>
            <Route index element={<EmployeeList />} />
            <Route path=":id" element={<EmployeeDetail />} />
          </Route>
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
