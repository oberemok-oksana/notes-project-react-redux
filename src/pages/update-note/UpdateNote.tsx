import { useSelector } from "react-redux";
import { getEditingNoteId } from "../../redux/slices/ui/uiSlice";
import UpdateForm from "./UpdateForm";

const UpdateNote = () => {
  const editingNoteId = useSelector(getEditingNoteId);

  if (!editingNoteId) {
    return null;
  }

  return <UpdateForm noteId={editingNoteId} />;
};

export default UpdateNote;
