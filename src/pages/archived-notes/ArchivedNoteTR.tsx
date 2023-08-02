import { NoteType } from "../../types";
import { useDispatch } from "react-redux";
import { unarchive } from "../../redux/slices/notes/notesSlice";
import CategoryImg from "../../components/CategoryImg";

type ArchivedNoteTR = {
  note: NoteType;
};

const ArchivedNoteTR = ({ note }: ArchivedNoteTR) => {
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
      <td></td>
      <td className="table__td">
        <img
          className="cursor"
          src="/images/icons8-download-24.png"
          alt="archiving"
          onClick={() => dispatch(unarchive(note.id))}
        />
      </td>
      <td></td>
    </tr>
  );
};

export default ArchivedNoteTR;
