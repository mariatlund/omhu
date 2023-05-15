import React, { useId } from "react";

interface RadioProps {
  label: string;
  value: string;
  fieldName: string;
  defaultChecked?: boolean;
}

function Radio({ label, value, fieldName, defaultChecked }: RadioProps) {
  const ID = useId();
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={fieldName} value={value} id={ID} checked={defaultChecked} className="w-6 h-6 accent-blue" />
      <label htmlFor={ID} className="style-body text-blue">
        {label}
      </label>
    </div>
  );
}

export default Radio;
