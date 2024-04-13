const Button = (props) => {
  const btnStyles = props.styles || "";
  const btnText = props.btnText || "";
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient ${btnStyles}
    font-poppins font-semibold text-[18px] text-primary
    outline-none`}
      type="button"
    >
      {btnText}
    </button>
  );
};

export default Button;
