import { useSelector } from "react-redux";
import UpdateForm from "./UpdateForm";
import { RootState } from "../../redux/store";

const UpdateNote = () => {
  const editingNoteId = useSelector((state: RootState) => state.ui.editing);

  if (!editingNoteId) {
    return null;
  }

  return <UpdateForm noteId={editingNoteId} />;
};

export default UpdateNote;
