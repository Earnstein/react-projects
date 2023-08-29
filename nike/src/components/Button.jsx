const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const buttonBackgroundColor = backgroundColor || 'bg-coral-red';
  const buttonTextColor = textColor || 'text-white';
  const buttonBorderColor = borderColor || 'border-coral-red';
  const buttonFullWidth = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
       ${buttonFullWidth} ${buttonBackgroundColor} ${buttonTextColor} ${buttonBorderColor}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
