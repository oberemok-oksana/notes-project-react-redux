import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";
import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
