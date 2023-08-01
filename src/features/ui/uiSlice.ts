import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  creating: boolean;
  editing: string | null;
}

const initialState: UiState = {
  creating: false,
  editing: null,
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
    startEditing: (state, action: PayloadAction<string>) => {
      state.editing = action.payload;
    },
    finishEditing: (state) => {
      state.editing = null;
    },
  },
});

export const {
  showCreatingForm,
  hideCreatingForm,
  toggle,
  startEditing,
  finishEditing,
} = uiSlice.actions;

export default uiSlice.reducer;
