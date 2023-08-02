import SummaryTR from "./SummaryTR";

const SummaryTable = () => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head_row">
          <td className="table-head__td">Note Category</td>
          <td className="table-head__td">Active</td>
          <td className="table-head__td">Archived</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <SummaryTR category="Task" />
        <SummaryTR category="Idea" />
        <SummaryTR category="Random Thought" />
        <SummaryTR category="Quote" />
      </tbody>
    </table>
  );
};

export default SummaryTable;
