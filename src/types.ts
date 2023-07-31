export type NoteType = {
  title: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  active: boolean;
  id: string;
};

export type NoteInputsType = Pick<NoteType, "title" | "category" | "content">;
