import { useSelector } from "react-redux";
import { isCreating } from "../../redux/slices/ui/uiSlice";
import CreateForm from "./CreateForm";
import ShowCreateFormButton from "./ShowCreateFormButton";

const CreateNote = () => {
  const creatingFormIsVisible = useSelector(isCreating);

  return (
    <>
      <ShowCreateFormButton />
      {creatingFormIsVisible && <CreateForm />}
    </>
  );
};

export default CreateNote;
