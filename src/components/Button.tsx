type ButtonPropsType = {
  text: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ text, onClick }: ButtonPropsType) => {
  return (
    <button className="button" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default Button;
