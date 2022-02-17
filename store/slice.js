import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getEmployeesQuery } from "../utils/apollo-client";
import log from "../service/log";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: { employees: [], employee: {} },
  reducers: {
    vote: (state, action) => {
      const employees = [];
      log({ page: "Home", action: "Voted" });
      current(state).employees.map((item) => {
        if (item.id === action.payload.employee.id) {
          employees.push({ ...item, vote: item.vote + action.payload.count });
        } else {
          employees.push(item);
        }
      });

      employees.sort((a, b) => (a.vote < b.vote ? 1 : b.vote < a.vote ? -1 : 0));

      state.employees = employees;
    },
    getEmployee: (state, action) => {
      const employee = current(state).employees.find((item) => item.id == action.payload);
      state.employee = employee;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload.data.employees;
    });
  },
});

export const { vote, getEmployee } = appSlice.actions;

export default appSlice.reducer;

export const getEmployees = createAsyncThunk("getEmployees", async () => {
  return await getEmployeesQuery;
});
