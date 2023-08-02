import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CreateForm from "./CreateForm";
import ShowCreateFormButton from "./ShowCreateFormButton";

const CreateNote = () => {
  const creatingFormIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );

  return (
    <>
      <ShowCreateFormButton />
      {creatingFormIsVisible && <CreateForm />}
    </>
  );
};

export default CreateNote;
