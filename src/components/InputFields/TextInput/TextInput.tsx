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
  value?: string;
}

function TextInput({ type, label, fieldName, placeholder, required = true, errorMessage, onChange, pattern, value }: inputProps) {
  const ID = useId();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim(); // Trim any space
    const newValue = inputValue === "" ? "0" : inputValue; // Set to "0" if the input value is empty

    if (onChange) {
      event.target.value = newValue; // Update the input value before calling onChange
      onChange(event); // Call the provided onChange function
    }
  };

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
          onChange={handleInputChange}
          pattern={pattern}
          value={value}
        />
      ) : type === "email" ? (
        <input
          type="email"
          name={fieldName}
          id={ID}
          placeholder={placeholder}
          className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue hover:border-blue focus:outline-blue style-body-small"
          required={required}
          onChange={handleInputChange}
          pattern={pattern}
          value={value}
        />
      ) : (
        <input
          type="tel"
          name={fieldName}
          id={ID}
          placeholder={placeholder}
          className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue hover:border-blue focus:outline-blue style-body-small"
          required={required}
          onChange={handleInputChange}
          pattern={pattern}
          value={value}
        />
      )}
    </div>
  );
}

export default TextInput;
