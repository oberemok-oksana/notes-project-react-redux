import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../features/notes/notesSlice";
import { hideCreatingForm } from "../features/ui/uiSlice";
import { NoteInputsType } from "../types";
import Form from "./Form";

const CreateForm = () => {
  const dispatch = useDispatch();
  const initialValues: NoteInputsType = {
    title: "",
    category: "",
    content: "",
  };

  const onSubmit: SubmitHandler<NoteInputsType> = (data) => {
    dispatch(add(data));
    dispatch(hideCreatingForm());
  };

  return <Form onSubmit={onSubmit} initialValues={initialValues} />;
};

export default CreateForm;
