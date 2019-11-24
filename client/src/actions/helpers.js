import set from "lodash-es/set";
import { action } from "statezero";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components.
// studentForm and message state paths are used by the StudentForm component.
// studentList state path is used by the StudentList component.
export const setEmptyState = () => {
  setStateByPath("studentForm", { name: "", year: "" });
  setStateByPath("studentList", []);
  setStateByPath("message", { type: "", body: "" });
};

// Helper method to set a state path.
// Usage: setStateByPath(STATE_PATH_NAME, STATE_PATH_VALUE);
export const setStateByPath = action(({ commit, state }, path, value) => {
  set(state, path, value);
  commit(state);
});
