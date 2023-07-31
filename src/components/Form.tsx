const Form = () => {
  return (
    <form className="card">
      <input
        className="input"
        name="title"
        type="text"
        id="name"
        placeholder="Note title"
        required
      />
      <div className="wrapper">
        <label htmlFor="category">Choose a note category:</label>
        <select className="select" name="category" id="category" required>
          <option value="">Choose something</option>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
        </select>
      </div>

      <textarea
        className="input"
        name="content"
        id="note-content"
        cols={30}
        rows={10}
        required
      ></textarea>

      <button type="submit" className="button" id="save-note-btn">
        Save
      </button>
    </form>
  );
};

export default Form;
