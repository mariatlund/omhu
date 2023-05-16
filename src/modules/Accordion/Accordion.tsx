import { Disclosure } from "@headlessui/react";
import React from "react";

function Accordion() {
  return (
    <section className="space-y-10">
      <h1 className="style-h1">FAQ</h1>
      <div>
        <h2 className="style-h3 text-blue mb-5">Delivery</h2>
        <Disclosure as="div" className="border border-blue dark:border-blue">
          <Disclosure.Button className="focus-outline flex w-full justify-between py-3 px-4 text-left style-body text-blue uppercase">
            Which countries do you deliver to?
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-6 w-6 transition-transform ui-open:-scale-y-100">
              <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-2 pb-4 style-body-small text-blue max-w-xl">
            We currently deliver to Europe, the United Kingdom and the United States. If you´re located somewhere else in the world, you can contact us to find out if we can arrange for delivery to your location.
          </Disclosure.Panel>
        </Disclosure>
      </div>

      <div>
        <h2 className="style-h3 text-blue mb-5">Product</h2>
      </div>

      <div>
        <h2 className="style-h3 text-blue mb-5">Returns</h2>
      </div>
    </section>
  );
}

export default Accordion;
