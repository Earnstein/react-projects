import { cn } from "@/utils";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  styles
}) => {
  return (
    <div
      className={cn(`col-span-6 ${styles}`)}
    >
      <label className="label-style" htmlFor={name}>
        {label}
      </label>
      <input
        className={cn(
          "input-style focus:outline-none focus:shadow-outline focus:border-indigo-300 focus:border-1 shadow-sm placeholder:font-palanquin",
          error && "border-red-500"
        )}
        id={name}
        type={type}
        placeholder={label === "Confirm Password" ? "Password" : label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default Input;
