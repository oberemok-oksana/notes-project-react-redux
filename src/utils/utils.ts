import { NoteType } from "../types";

export const getCategoryActiveNotes = (notes: NoteType[]) => {
  return notes.filter((note) => note.active).length;
};

export const getCategoryArchivedNotes = (notes: NoteType[]) => {
  return notes.filter((note) => !note.active).length;
};
