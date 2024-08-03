const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getSingleTicket = (id) => {
  return fetch(`/api/servicetickets/${id}`).then((r) => r.json());
};

export const getCustomers = () => {
  return fetch("/api/customers").then((r) => r.json());
};

export const getSingleCustomer = (Id) => {
  return fetch(`/api/customers/${Id}`).then((r) => r.json())
}

export const getEmployees = () => {
  return fetch("/api/employees").then((r) => r.json())
}

export const getSingleEmployee = (Id) => {
  return fetch(`/api/employees/${Id}`).then((r) => r.json())
}

//export a function here that gets a ticket by id
