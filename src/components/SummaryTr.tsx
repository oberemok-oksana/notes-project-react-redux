import CategoryImg from "./CategoryImg";
import { getCategoryActiveNotes, getCategoryArchivedNotes } from "../lib";
import { CategoryType } from "../types";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type SummaryTrPropsType = {
  category: CategoryType;
};

const SummaryTr = ({ category }: SummaryTrPropsType) => {
  const notes = useSelector((state: RootState) => state.notes.value).filter(
    (note) => note.category === category
  );

  return (
    <tr className="table-data">
      <td className="table__td name-category">
        <div className="category">
          <CategoryImg category={category} />
        </div>
        <span>{category}</span>
      </td>
      <td>{getCategoryActiveNotes(notes)}</td>
      <td>{getCategoryArchivedNotes(notes)}</td>
    </tr>
  );
};

export default SummaryTr;
