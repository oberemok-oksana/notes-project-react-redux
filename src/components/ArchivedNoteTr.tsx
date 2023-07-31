import { NoteType } from "../types";
import { useDispatch } from "react-redux";
import { unarchive } from "../features/notes/notesSlice";

type ArchivedNoteTr = {
  note: NoteType;
};

const ArchivedNoteTr = ({ note }: ArchivedNoteTr) => {
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
      <td></td>
      <td className="table__td">
        <img
          className="cursor"
          src="/images/icons8-download-24.png"
          alt="archiving"
          onClick={() => dispatch(unarchive(note.id))}
        />
      </td>
    </tr>
  );
};

export default ArchivedNoteTr;
