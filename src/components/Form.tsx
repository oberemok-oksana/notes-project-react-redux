import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../features/notes/notesSlice";
import { hideCreatingForm } from "../features/ui/uiSlice";

type Inputs = {
  title: string;
  content: string;
  category: string;
};

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(add(data));
    reset();
    dispatch(hideCreatingForm());
  };

  return (
    <form className="card" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        type="text"
        id="name"
        placeholder="Note title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <div className="wrapper">
        <label htmlFor="category">Choose a note category:</label>
        <select
          className="select"
          id="category"
          {...register("category", { required: true })}
        >
          <option value="">Choose something</option>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
        </select>
        {errors.category && <span>This field is required</span>}
      </div>

      <textarea
        className="input"
        id="note-content"
        cols={30}
        rows={10}
        {...register("content", { required: true })}
      ></textarea>
      {errors.content && <span>This field is required</span>}

      <button type="submit" className="button" id="save-note-btn">
        Save
      </button>
    </form>
  );
};

export default Form;
