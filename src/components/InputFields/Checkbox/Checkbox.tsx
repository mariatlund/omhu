import React, { useId } from "react";

interface CheckboxProps {
  label: string;
  value: string;
  fieldName: string;
}

function Checkbox({ label, value, fieldName }: CheckboxProps) {
  const ID = useId();
  return (
    <div className="flex gap-x-2 items-center style-body text-blue hover:text-link ">
      <input type="checkbox" name={fieldName} value={value} id={ID} className="w-6 h-6 accent-blue cursor-pointer" />
      <label htmlFor={ID} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
