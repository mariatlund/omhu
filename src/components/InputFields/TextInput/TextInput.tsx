import React, { useId } from "react";

interface inputProps {
  type: "text" | "email" | "tel";
  label?: string;
  fieldName: string;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
}

function TextInput({ type, label, fieldName, placeholder, required = true, errorMessage, onChange, pattern }: inputProps) {
  const ID = useId();
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-blue ml-1 style-body-x-small" htmlFor={ID}>
          {label}
        </label>
      ) : null}
      {type === "text" ? (
        <input
          type="text"
          name={fieldName}
          id={ID}
          placeholder={placeholder}
          className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue hover:border-blue focus:outline-blue style-body-small"
          required={required}
          onChange={onChange}
          pattern={pattern}
        />
      ) : type === "email" ? (
        <input
          type="email"
          name={fieldName}
          id={ID}
          placeholder={placeholder}
          className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue hover:border-blue focus:outline-blue style-body-small"
          required={required}
          onChange={onChange}
          pattern={pattern}
        />
      ) : (
        <input
          type="tel"
          name={fieldName}
          id={ID}
          placeholder={placeholder}
          className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue hover:border-blue focus:outline-blue style-body-small"
          required={required}
          onChange={onChange}
          pattern={pattern}
        />
      )}
    </div>
  );
}

export default TextInput;
