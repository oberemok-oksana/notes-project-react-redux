import { useSelector } from "react-redux";
import ActiveNoteTR from "./ActiveNoteTR";
import { getActiveNotes } from "../../redux/slices/notes/notesSlice";

const ActiveNotesTable = () => {
  const activeNotes = useSelector(getActiveNotes);

  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head_row">
          <td className="table-head__td"></td>
          <td className="table-head__td">Name</td>
          <td className="table-head__td">Created</td>
          <td className="table-head__td">Category</td>
          <td className="table-head__td">Content</td>
          <td className="table-head__td">Dates</td>
          <td className="table-head__td"></td>
          <td className="table__td">
            <img src="/images/icons8-download-24-white.png" alt="archiving" />
          </td>
          <td className="table__td">
            <img src="/images/icons8-delete-24-white.png" alt="deleting" />
          </td>
        </tr>
      </thead>
      <tbody>
        {activeNotes.map((note) => (
          <ActiveNoteTR key={note.id} note={note} />
        ))}
      </tbody>
    </table>
  );
};

export default ActiveNotesTable;
