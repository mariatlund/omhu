import React from "react";

interface inputProps {
  label: string;
  placeholder?: string;
  errorMessage?: string;
}

function TextInput({ label, placeholder, errorMessage }: inputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-blue ml-1 style-body-x-small" htmlFor="test1">
        {label}
      </label>
      <input type="text" name="test" id="test1" placeholder={placeholder} className="bg-white border border-blue-75 px-4 py-2 placeholder:text-blue-50 text-blue focus:outline-none focus:border-2 focus:border-blue style-body-small" />
    </div>
  );
}

export default TextInput;
