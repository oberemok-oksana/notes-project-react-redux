const Table = () => {
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
        <tr className="table-data">
          <td>
            <div className="category">
              <img src="/images/icons8-cart-30.png" alt="task" />
            </div>
          </td>
          <td>Shopping list</td>
          <td>April 20, 2021</td>
          <td>Task</td>
          <td>Tomatoes, bread</td>
          <td></td>
          <td className="table__td">
            <img src="/images/icons8-edit-24.png" alt="editing" />
          </td>
          <td className="table__td">
            <img src="/images/icons8-download-24.png" alt="archiving" />
          </td>
          <td className="table-head__td">
            <img src="/images/icons8-delete-24.png" alt="deleting" />
          </td>
        </tr>
        <tr className="table-data">
          <td>
            <div className="category">
              <img src="/images/icons8-get-quote-30.png" alt="task" />
            </div>
          </td>
          <td>William Gaddis</td>
          <td>April 27, 2021</td>
          <td>Quote</td>
          <td>Power doesn't ...</td>
          <td></td>
          <td className="table__td">
            <img src="/images/icons8-edit-24.png" alt="editing" />
          </td>
          <td className="table__td">
            <img src="/images/icons8-download-24.png" alt="archiving" />
          </td>
          <td className="table-head__td">
            <img src="/images/icons8-delete-24.png" alt="deleting" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
