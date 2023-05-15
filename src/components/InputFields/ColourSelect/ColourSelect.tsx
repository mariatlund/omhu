import { Listbox } from "@headlessui/react";
import clsx from "clsx";

const chevronUp = (
  <svg width="16" height="16" viewBox="0 0 24 16" fill="none">
    <path d="M4.62309 13.5287L11.7644 6.40301L18.9056 13.5287L21.0994 11.335L11.7644 2L2.42937 11.335L4.62309 13.5287Z" fill="currentColor" />
  </svg>
);

const chevronDown = (
  <svg width="16" height="16" viewBox="0 0 24 16" fill="none">
    <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
  </svg>
);

export interface Option {
  label: string;
  value: string;
  hexCode: string;
}

export interface ColourSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  selectedOptionValue?: string;
  defaultOption?: Option;
  placeholder?: string;
  containerClass?: string;
}

export default function ColourSelect({ selectedOptionValue, options, containerClass, placeholder, onChange, defaultOption }: ColourSelectProps) {
  const selectedOption = options.find(({ value }) => value === selectedOptionValue);

  return (
    <Listbox value={selectedOptionValue || defaultOption?.value} onChange={onChange} as="div" className={clsx("relative text-blue style-body", containerClass)}>
      {({ open }) => (
        <>
          <Listbox.Button className={clsx("flex justify-between w-full gap-x-5 border py-2 px-4", "border-blue bg-white items-center focus:outline-2 focus:outline-blue")}>
            <div className="flex items-center gap-5">
              {defaultOption ? <span className="rounded-full w-8 h-8 inline-block" style={selectedOption?.hexCode ? { backgroundColor: selectedOption?.hexCode } : { backgroundColor: defaultOption?.hexCode }}></span> : null}

              <span className="truncate">{selectedOption?.label ?? (placeholder || defaultOption?.label)}</span>
            </div>
            <span className="w-3 h-3 flex-none">{open ? chevronUp : chevronDown}</span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-2 z-10 w-full overflow-hidden border border-blue bg-white py-4 drop-shadow focus:outline-2 focus:outline-blue">
            {options.map((option) => (
              <Listbox.Option key={option.value} value={option.value}>
                {({ active }) => (
                  <span className={clsx("truncate px-4 py-2 flex items-center gap-5", active ? "cursor-pointer bg-blue-25 font-medium text-primary" : "")}>
                    <span className="rounded-full w-8 h-8 inline-block" style={{ backgroundColor: option.hexCode }}></span>
                    {option.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}
