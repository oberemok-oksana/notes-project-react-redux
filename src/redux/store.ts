import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notes/notesSlice";
import uiReducer from "./slices/ui/uiSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
