import { SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/notes/notesSlice";
import { finishEditing } from "../../redux/slices/ui/uiSlice";
import { RootState } from "../../redux/store";
import { NoteInputsType } from "../../types";
import Form from "../../components/Form";

type UpdateFormPropsType = {
  noteId: string;
};

const UpdateForm = ({ noteId }: UpdateFormPropsType) => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.notes).find(
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
