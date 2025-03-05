import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teams from "../../data/teams-data";

const initialState = {
  departments: 0,
  units: 0,
  loading: true,
  error: null,
};

export const GetTeamData = createAsyncThunk(
  "App/GetTeamData",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return teams;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const teamsSlice = createSlice({
  initialState,
  name: "teams",
  reducers: {
    fetchTeamsSuccess: (state, action) => {
      state.departments = action.payload.department;
      state.units = action.payload.unit;
      state.loading = false;
    },
    fetchTeamsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetTeamData.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetTeamData.fulfilled, (state, action) => {
        state.departments = action.payload.department;
        state.units = action.payload.unit;
        state.loading = false;
      })
      .addCase(GetTeamData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchTeamsSuccess, fetchTeamsFailure } = teamsSlice.actions;

export const TeamReducer = teamsSlice.reducer;
