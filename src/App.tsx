import Button from "./components/Button";
import Form from "./components/Form";
import ActiveNotes from "./components/ActiveNotes";
import { toggle } from "./features/ui/uiSlice";
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import ArchivedNotes from "./components/ArchivedNotes";
import Summary from "./components/Summary";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";

function App() {
  const creatingFormIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );
  const editingNoteId = useSelector((state: RootState) => state.ui.editing);
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
      {creatingFormIsVisible && <CreateForm />}
      {editingNoteId && <UpdateForm noteId={editingNoteId} />}
      <Summary />
      <h3>Archived notes:</h3>
      <ArchivedNotes />
    </>
  );
}

export default App;
