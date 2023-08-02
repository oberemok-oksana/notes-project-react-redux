import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { toggle } from "../../redux/slices/ui/uiSlice";

const ShowCreateFormButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="button-wrapper">
      <Button
        type="button"
        text="Create note"
        onClick={() => dispatch(toggle())}
      />
    </div>
  );
};

export default ShowCreateFormButton;
