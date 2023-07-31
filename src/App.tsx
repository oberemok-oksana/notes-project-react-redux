import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [formVisibility, setFormVisibility] = useState(false);
  return (
    <>
      <Table />
      <div className="button-wrapper">
        <Button
          text="Create note"
          onClick={() => setFormVisibility((prev) => !prev)}
        />
      </div>
      {formVisibility && <Form />}
    </>
  );
}

export default App;
