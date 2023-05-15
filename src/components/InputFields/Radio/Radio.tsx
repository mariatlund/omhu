import React, { useId } from "react";

interface RadioProps {
  label: string;
  value: string;
  defaultChecked?: boolean;
}

function Radio({ label, value, defaultChecked }: RadioProps) {
  const ID = useId();
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={label ? label : "Radio button"} value={value} id={ID} checked={defaultChecked ? defaultChecked : undefined} className="w-6 h-6 accent-blue" />
      <label htmlFor={ID} className="style-body text-blue">
        {label}
      </label>
    </div>
  );
}

export default Radio;
