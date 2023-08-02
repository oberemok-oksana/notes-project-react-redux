import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/notes/notesSlice";
import { hideCreatingForm } from "../../redux/slices/ui/uiSlice";
import { NoteInputsType } from "../../types";
import Form from "../../components/Form";

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
