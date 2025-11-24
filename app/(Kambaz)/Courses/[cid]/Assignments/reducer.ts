/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignments }) => {
        const newAssignment: any = { 
            _id: uuidv4(),
            name: assignments.title,
            course: assignments.course,
        };
        state.assignments = [...state.assignments, newAssignment] as any;
      },
    deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
            (a: any) => a._id !== assignmentId
        );
    },
    updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
        ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;