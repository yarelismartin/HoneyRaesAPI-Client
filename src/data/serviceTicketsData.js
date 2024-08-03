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

// export const deleteSingleTicket = (id) => {
//   return fetch(`/api/serviceTickets/${id}`, {
//     method: 'DELETE',
//   })
//   .then((response) => {
//     // if the HTTP status code is in the range 200-299, indicating success
//     if (response.ok) {
//       // Reads the response body as plain text. Since the DELETE request might not return any content. Vs. Json that is used when expecting response body
//       return response.text();
//     } else {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//   })
//   // executes after the response is successfully processed. It explicitly returns null because there's no content to handle or parse.
//   .then(() => null) 
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }


export const deleteSingleTicket = (id) => new Promise((resolve, reject) => {
  fetch(`/api/serviceTickets/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((data) => resolve(data))
  .catch(reject);
});

export const closeServiceTicket = (id) => new Promise((resolve, reject) => {
  return fetch(`/api/servicetickets/${id}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  .then((data) => resolve(data))
  .catch(reject);

})
//export a function here that gets a ticket by id
