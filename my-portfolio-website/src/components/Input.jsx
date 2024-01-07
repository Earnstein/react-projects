import { cn } from "../utils";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className={cn(`col-span-6`)}>
      <label
        className="relative block rounded-md "
        htmlFor={name}
      >
      </label>
      <input
          className={cn(
            " w-full bg-blue font-semibold placeholder-white-400 p-2 sm:p-4 placeholder:font-palanquin outline-none rounded-md",
            error && "border-red-500"
          )}
          id={name}
          type={type}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      {error && <div className="col-span-6 text-red font-palanquintext-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default Input;
