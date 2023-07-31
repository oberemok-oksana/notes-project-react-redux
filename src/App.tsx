import Button from "./components/Button";
import Form from "./components/Form";
import ActiveNotes from "./components/ActiveNotes";
import { toggle } from "./features/ui/uiSlice";
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import ArchivedNotes from "./components/ArchivedNotes";

function App() {
  const creatingFormIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );
  const dispatch = useDispatch();

  return (
    <>
      <ActiveNotes />
      <div className="button-wrapper">
        <Button
          type="button"
          text="Create note"
          onClick={() => dispatch(toggle())}
        />
      </div>
      {creatingFormIsVisible && <Form />}
      <h3>Archived notes:</h3>
      <ArchivedNotes />
    </>
  );
}

export default App;
