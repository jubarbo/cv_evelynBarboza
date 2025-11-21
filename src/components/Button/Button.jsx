import '../Button/Button.css'
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="buttonClass" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;