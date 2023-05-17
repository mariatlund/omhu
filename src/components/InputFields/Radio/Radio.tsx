import React, { useId } from "react";

interface RadioProps {
  label: string;
  value: string;
  fieldName: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Radio({ label, value, fieldName, defaultChecked, onChange }: RadioProps) {
  const ID = useId();
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={fieldName} value={value} id={ID} defaultChecked={defaultChecked} onChange={onChange} className="w-6 h-6 accent-blue" />
      <label htmlFor={ID} className="style-body text-blue">
        {label}
      </label>
    </div>
  );
}

export default Radio;
