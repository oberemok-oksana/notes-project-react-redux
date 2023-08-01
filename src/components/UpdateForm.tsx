import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { NoteInputsType, NoteType } from "../types";
import { finishEditing, hideCreatingForm } from "../features/ui/uiSlice";
import { SubmitHandler } from "react-hook-form";
import { RootState } from "../store";
import { update } from "../features/notes/notesSlice";

type UpdateFormPropsType = {
  noteId: string;
};

const UpdateForm = ({ noteId }: UpdateFormPropsType) => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.notes.value).find(
    (note) => note.id === noteId
  );

  if (!note) {
    return null;
  }

  const initialValues = {
    title: note.title,
    category: note.category,
    content: note.content,
  };

  const onSubmit: SubmitHandler<NoteInputsType> = (note) => {
    dispatch(update({ id: noteId, note }));
    dispatch(finishEditing());
  };

  return <Form onSubmit={onSubmit} initialValues={initialValues} />;
};

export default UpdateForm;
