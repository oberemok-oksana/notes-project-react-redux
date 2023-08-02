import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategoryType, NoteInputsType, NoteType } from "../../../types";
import { checkForDates, setDate } from "../../../utils/date";

const initialState: NoteType[] = [
  {
    title: "Shopping list",
    created: "April 20, 2021",
    category: "Task",
    dates: "",
    content: "Tomatoes, bread",
    id: "1",
    active: true,
  },
  {
    title: "The theory of evolut..",
    created: "	April 27, 2021",
    category: "Random Thought",
    dates: "",
    content: "The evolution",
    id: "2",
    active: true,
  },
  {
    title: "New Feature",
    created: "May 05, 2021",
    category: "Idea",
    content: "Implement new 03/05/2021,to 05/05/2021",
    dates: "03/05/2021, 05/05/2021",
    id: "3",
    active: true,
  },
  {
    title: "William Gaddis",
    created: "May 07, 2021",
    category: "Quote",
    content: "Power doesn't co..",
    dates: "",
    id: "4",
    active: true,
  },
  {
    title: "Books",
    created: "May 15, 2021",
    category: "Task",
    content: "The Lean Startup",
    dates: "",
    id: "5",
    active: true,
  },
  {
    title: "React",
    created: "June 15, 2020",
    category: "Task",
    content: "Learn Components",
    dates: "",
    id: "6",
    active: false,
  },
  {
    title: "Flowers",
    created: "July 07, 2021",
    category: "Idea",
    content: "Plant new ones",
    dates: "",
    id: "7",
    active: false,
  },
];

const getNoteById = (state: NoteType[], id: string) =>
  state.find((note) => note.id === id);

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<NoteInputsType>) => {
      const note = {
        ...action.payload,
        category: action.payload.category as CategoryType,
        active: true,
        id: nanoid(),
        dates: checkForDates(action.payload.content),
        created: setDate(),
      };
      state.push(note);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      state.splice(index, 1);
    },
    archive: (state, action: PayloadAction<string>) => {
      const note = getNoteById(state, action.payload);
      if (note) {
        note.active = false;
      }
    },
    unarchive: (state, action: PayloadAction<string>) => {
      const note = getNoteById(state, action.payload);
      if (note) {
        note.active = true;
      }
    },
    update: (
      state,
      action: PayloadAction<{ id: string; note: NoteInputsType }>
    ) => {
      const note = getNoteById(state, action.payload.id);
      if (note) {
        note.title = action.payload.note.title;
        note.category = action.payload.note.category as CategoryType;
        note.content = action.payload.note.content;
        note.dates = checkForDates(action.payload.note.content);
      }
    },
  },
});

export const { add, deleteNote, archive, unarchive, update } =
  notesSlice.actions;

export default notesSlice.reducer;
