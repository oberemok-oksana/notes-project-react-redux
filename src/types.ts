export type NoteType = {
  title: string;
  created: string;
  category: CategoryType;
  content: string;
  dates: string;
  active: boolean;
  id: string;
};

export type NoteInputsType = Pick<NoteType, "title" | "category" | "content">;

export type CategoryType = "Task" | "Random Thought" | "Idea" | "Quote";
