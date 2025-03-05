import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/department-data";

const initialState = {
  departments: [],
  currentDepartment: {
    id: 0,
    name: "",
    about: "",
    department: 0,
    unit: 0,
    avatar: "",
    bg_color_1: "",
    bg_color_2: "",
  },
  loading: true,
  error: null,
};

export const GetDepartmentData = createAsyncThunk(
  "App/GetDepartmentData",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return data; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const departmentSlice = createSlice({
  initialState,
  name: "department",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetDepartmentData.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetDepartmentData.fulfilled, (state, action) => {
        state.departments = action.payload;
        state.currentDepartment =
          action.payload[0] || initialState.currentDepartment;
        state.loading = false;
      })
      .addCase(GetDepartmentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const DepartmentReducer = departmentSlice.reducer;
