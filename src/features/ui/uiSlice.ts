import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  creating: boolean;
}

const initialState: UiState = {
  creating: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCreatingForm: (state) => {
      state.creating = true;
    },
    hideCreatingForm: (state) => {
      state.creating = false;
    },
    toggle: (state) => {
      state.creating = !state.creating;
    },
  },
});

export const { showCreatingForm, hideCreatingForm, toggle } = uiSlice.actions;

export default uiSlice.reducer;
