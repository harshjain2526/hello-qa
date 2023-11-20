import { createSlice } from "@reduxjs/toolkit";

// Define slices for grouping and sorting
const groupingSlice = createSlice({
  name: "grouping",
  initialState: {
    groupingChoice: "user",
    sortChoice: "priority",
  },
  reducers: {
    setGroupingChoice: (state, action) => {
      state.groupingChoice = action.payload;
    },
    setSortChoice: (state, action) => {
      state.sortChoice = action.payload;
    },
  },
});

// Define action creators
export const { setGroupingChoice, setSortChoice } = groupingSlice.actions;

export default groupingSlice.reducer;
