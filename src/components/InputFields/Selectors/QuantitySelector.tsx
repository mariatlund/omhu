import React from "react";

interface QuantitySelectorProps {
  onChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

function QuantitySelector({ onChangeQuantity, counter, setCounter }: QuantitySelectorProps) {
  return (
    <div className="flex flex-row gap-2 h-auto">
      <button
        onClick={() => {
          if (counter >= 1) {
            setCounter((counter) => counter - 1);
          }
        }}
        className="py-1 px-2 border-blue border-2"
      >
        -
      </button>
      <input type="text" pattern="[0-9]" placeholder={"0"} onChange={onChangeQuantity} className="py-1 px-2 border-blue border-2 text-center" size={2} value={counter} />
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
        className="py-1 px-2 border-blue border-2"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
