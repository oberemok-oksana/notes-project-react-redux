import CategoryImg from "../../components/CategoryImg";
import {
  getCategoryActiveNotes,
  getCategoryArchivedNotes,
} from "../../utils/utils";
import { CategoryType } from "../../types";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

type SummaryTrPropsType = {
  category: CategoryType;
};

const SummaryTR = ({ category }: SummaryTrPropsType) => {
  const notes = useSelector((state: RootState) => state.notes).filter(
    (note) => note.category === category
  );

  return (
    <tr className="table-data">
      <td className="name-category">
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

export default SummaryTR;
