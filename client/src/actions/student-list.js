// Action methods used by the StudentList component

import { setStateByPath } from "./helpers";

// A function to send a GET request to the web server,
//  and then loop through them and add a list element for each student.
export const getStudents = () => {
  // the URL for the request
  const url = "/students";

  // Since this is a GET request, simply call fetch on the URL
  fetch(url)
    .then(res => {
      if (res.status === 200) {
        // return a promise that resolves with the JSON body
        return res.json();
      } else {
        alert("Could not get students");
      }
    })
    .then(json => {
      // the resolved promise with the JSON body
      setStateByPath("studentList", json.students);
    })
    .catch(error => {
      console.log(error);
    });
};
