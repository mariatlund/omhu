import React, { useId } from "react";

interface RadioProps {
  label: string;
  value: string;
  fieldName: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

function Radio({ label, value, fieldName, defaultChecked, onChange, checked }: RadioProps) {
  const ID = useId();
  return (
    <div className="flex items-center gap-2 style-body text-blue hover:text-link">
      <input type="radio" name={fieldName} value={value} id={ID} defaultChecked={defaultChecked} onChange={onChange} checked={checked} className="w-6 h-6 accent-blue  cursor-pointer" />
      <label htmlFor={ID} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default Radio;
