import { NoteType } from "../types";
import { useDispatch } from "react-redux";
import { deleteNote, archive } from "../features/notes/notesSlice";

type NoteTrPropsType = {
  note: NoteType;
};

const NoteTr = ({ note }: NoteTrPropsType) => {
  const dispatch = useDispatch();
  let categoryImageSrc = "/images/icons8-cart-30.png";
  let categoryImageAlt = "something";

  switch (note.category) {
    case "Task":
      categoryImageSrc = "./public/images/icons8-cart-30.png";
      categoryImageAlt = "task";
      break;

    case "Random Thought":
      categoryImageSrc = "./public/images/icons8-mind-30.png";
      categoryImageAlt = "random thought";
      break;

    case "Idea":
      categoryImageSrc = "./public/images/icons8-light-on-30.png";
      categoryImageAlt = "idea";
      break;

    case "Quote":
      categoryImageSrc = "./public/images/icons8-get-quote-30.png";
      categoryImageAlt = "quote";
      break;
    default:
      categoryImageSrc = "./public/images/icons8-cart-30.png";
      categoryImageAlt = "quote";
      break;
  }

  return (
    <tr className="table-data">
      <td>
        <div className="category">
          <img src={categoryImageSrc} alt={categoryImageAlt} />
        </div>
      </td>
      <td>{note.title}</td>
      <td>{note.created}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td className="table__td">
        <img src="/images/icons8-edit-24.png" alt="editing" />
      </td>
      <td className="table__td">
        <img
          src="/images/icons8-download-24.png"
          alt="archiving"
          onClick={() => dispatch(archive(note.id))}
        />
      </td>
      <td className="table-head__td">
        <img
          src="/images/icons8-delete-24.png"
          alt="deleting"
          onClick={() => dispatch(deleteNote(note.id))}
        />
      </td>
    </tr>
  );
};

export default NoteTr;
