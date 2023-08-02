import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
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

export const isCreating = (state: RootState) => state.ui.creating;

export const getEditingNoteId = (state: RootState) => state.ui.editing;

export default uiSlice.reducer;
