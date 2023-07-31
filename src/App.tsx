import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";
import { toggle } from "./features/ui/uiSlice";
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const creatingFormIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );
  const dispatch = useDispatch();

  return (
    <>
      <Table />
      <div className="button-wrapper">
        <Button
          type="button"
          text="Create note"
          onClick={() => dispatch(toggle())}
        />
      </div>
      {creatingFormIsVisible && <Form />}
    </>
  );
}

export default App;
