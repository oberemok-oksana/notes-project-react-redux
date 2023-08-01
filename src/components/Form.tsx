import { useForm, SubmitHandler } from "react-hook-form";
import { NoteInputsType } from "../types";

type FormPropsType = {
  onSubmit: SubmitHandler<NoteInputsType>;
  initialValues: NoteInputsType;
};

const Form = ({ onSubmit, initialValues }: FormPropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteInputsType>({
    defaultValues: initialValues,
  });

  return (
    <form className="card" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        type="text"
        id="name"
        placeholder="Note title"
        {...register("title", { required: true })}
      />
      {errors.title && <span className="required">This field is required</span>}
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
        {errors.category && (
          <span className="required">This field is required</span>
        )}
      </div>

      <textarea
        className="input"
        id="note-content"
        cols={30}
        rows={10}
        {...register("content", { required: true })}
      ></textarea>
      {errors.content && (
        <span className="required">This field is required</span>
      )}

      <button type="submit" className="button" id="save-note-btn">
        Save
      </button>
    </form>
  );
};

export default Form;
