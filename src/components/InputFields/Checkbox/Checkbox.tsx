import React, { useId } from "react";

interface CheckboxProps {
  label: string;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

function Checkbox({ label, value, name, onChange, checked }: CheckboxProps) {
  const ID = useId();
  return (
    <div className="flex gap-x-2 items-center style-body text-blue hover:text-link ">
      <input type="checkbox" name={name} value={value} id={ID} onChange={onChange} checked={checked} className="w-6 h-6 accent-blue cursor-pointer flex-none" />
      <label htmlFor={ID} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
