// Action methods used by the StudentForm component

// getState is used to get the value of a state path
import { getState } from "statezero";

import { setStateByPath } from "./helpers";

export const updateStudentForm = field => {
  const { name, value } = field;
  setStateByPath(`studentForm.${name}`, value);
};

// A function to send a POST request with a new student.
export const addStudent = () => {
  // the URL for the request
  const url = "/students";

  // The data we are going to send in our request
  const student = getState("studentForm");

  // Create our request constructor with all the parameters we need
  const request = new Request(url, {
    method: "post",
    body: JSON.stringify(student),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });

  // Send the request with fetch()
  fetch(request)
    .then(function(res) {
      // Handle response we get from the API.
      // Usually check the error codes to see what happened.
      if (res.status === 200) {
        // If student was added successfully, tell the user.
        setStateByPath("message", {
          body: "Success: Added a student.",
          type: "success"
        });
      } else {
        // If server couldn't add the student, tell the user.
        // Here we are adding a generic message, but you could be more specific in your app.
        setStateByPath("message", {
          body: "Error: Could not add student.",
          type: "error"
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
