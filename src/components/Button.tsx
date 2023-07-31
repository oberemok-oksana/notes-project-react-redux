type ButtonPropsType = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ text, onClick }: ButtonPropsType) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
