import SummaryTr from "./SummaryTr";

const Summary = () => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head_row">
          <td className="table-head__td">Note Category</td>
          <td className="table-head__td">Active</td>
          <td className="table-head__td">Archived</td>
        </tr>
      </thead>
      <tbody>
        <SummaryTr category="Task" />
        <SummaryTr category="Idea" />
        <SummaryTr category="Random Thought" />
        <SummaryTr category="Quote" />
      </tbody>
    </table>
  );
};

export default Summary;
