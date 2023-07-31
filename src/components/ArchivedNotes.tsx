import { useSelector } from "react-redux";
import { RootState } from "../store";
import ArchivedNoteTr from "./ArchivedNoteTr";

const ArchivedNotes = () => {
  const archivedNotes = useSelector(
    (state: RootState) => state.notes.value
  ).filter((note) => !note.active);

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
          <td className="table-head__td"></td>
        </tr>
      </thead>
      <tbody>
        {archivedNotes.map((note) => (
          <ArchivedNoteTr key={note.id} note={note} />
        ))}
      </tbody>
    </table>
  );
};

export default ArchivedNotes;
