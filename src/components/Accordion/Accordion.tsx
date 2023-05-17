import { Disclosure } from "@headlessui/react";
import React from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
  imageSrc?: string;
}

interface AccordionProps {
  title?: string;
  items: FaqItem[];
}

function Accordion({ title, items }: AccordionProps) {
  return (
    <section>
      {title ? <h2 className="style-h3 text-blue mb-5">{title}</h2> : null}
      <div className="space-y-2">
        {items?.map((item, index) => (
          <Disclosure key={index} as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              {item.question}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue grid md:grid-cols-3 gap-x-5">
              <div className="md:col-span-2">{item.answer}</div>
              {item.imageSrc ? <Image src={item.imageSrc} alt="" className="lg:max-w-xl" /> : null}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}

export default Accordion;
