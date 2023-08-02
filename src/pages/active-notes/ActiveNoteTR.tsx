import { NoteType } from "../../types";
import { useDispatch } from "react-redux";
import { deleteNote, archive } from "../../redux/slices/notes/notesSlice";
import CategoryImg from "../../components/CategoryImg";
import { startEditing } from "../../redux/slices/ui/uiSlice";

type ActiveNoteTRPropsType = {
  note: NoteType;
};

const ActiveNoteTR = ({ note }: ActiveNoteTRPropsType) => {
  const dispatch = useDispatch();

  return (
    <tr className="table-data">
      <td>
        <div className="category">
          <CategoryImg category={note.category} />
        </div>
      </td>
      <td>{note.title}</td>
      <td>{note.created}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td className="table__td">
        <img
          className="cursor"
          src="/images/icons8-edit-24.png"
          alt="editing"
          onClick={() => dispatch(startEditing(note.id))}
        />
      </td>
      <td className="table__td">
        <img
          className="cursor"
          src="/images/icons8-download-24.png"
          alt="archiving"
          onClick={() => dispatch(archive(note.id))}
        />
      </td>
      <td className="table-head__td">
        <img
          className="cursor"
          src="/images/icons8-delete-24.png"
          alt="deleting"
          onClick={() => dispatch(deleteNote(note.id))}
        />
      </td>
    </tr>
  );
};

export default ActiveNoteTR;
