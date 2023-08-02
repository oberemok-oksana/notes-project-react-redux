import { SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import { getNoteById, update } from "../../redux/slices/notes/notesSlice";
import { finishEditing } from "../../redux/slices/ui/uiSlice";
import { NoteInputsType } from "../../types";

type UpdateFormPropsType = {
  noteId: string;
};

const UpdateForm = ({ noteId }: UpdateFormPropsType) => {
  const dispatch = useDispatch();
  const note = useSelector(getNoteById(noteId));

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
