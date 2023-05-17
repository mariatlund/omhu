import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";

function Accordion() {
  return (
    <section className="space-y-10">
      <h1 className="style-h1">FAQ</h1>
      <div>
        <h2 className="style-h3 text-blue mb-5">Delivery</h2>
        <div className="space-y-2">
          <Disclosure as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              Which countries do you deliver to?
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
              We currently deliver to Europe, the United Kingdom and the United States. If you&apos;re located somewhere else in the world, you can <Link href="/contact">contact us</Link> to find out if we can arrange for delivery to your location.
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              What are the costs for international shipping?
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
              Shipping costs are included in the price for all purchases with delivery within Europe. For delivery to other countries, we will generate a custom price for you based on our agreement with our shipping partner. Enter your address when
              purchasing, and the delivery price will be generated for you.
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              How long does delivery take?
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
              At the moment, we have wait times for production before delivery can take place. We do our best to keep you informed about your order, and will let you know the moment it ships. Once your order has shipped it usually takes between one
              and two weeks to arrive depending on your location.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>

      <div>
        <h2 className="style-h3 text-blue mb-5">Product</h2>
        <div className="space-y-2">
          <Disclosure as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              How can I clean and maintain my TEDDY sofa?
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
              The covers on your TEDDY sofa can easily be unzipped and removed from both the mattresses and pillows and washed at low temperature. It is recommended to turn the covers inside out and to wash them at max 30 degress celcius med mild or
              extra gentle detergent.
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure as="div" className="border border-blue dark:border-blue">
            <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
              Where are OMHU&apos;s products produced?
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
                <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
              We currently have our production based in Poland, where our mattresses, covers and metal frames are made. We also work with an upholsterer based in Denmark.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>

      <div>
        <h2 className="style-h3 text-blue mb-5">Returns</h2>
        <Disclosure as="div" className="border border-blue dark:border-blue">
          <Disclosure.Button className="focus-outline flex gap-2 w-full justify-between py-3 px-4 text-left style-body text-blue uppercase items-center hover:text-link">
            Do you have a return policy?
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-4 md:h6 md:w-6 transition-transform flex-none ui-open:-scale-y-100">
              <path d="M18.8369 1.99996L11.6956 9.12568L4.55432 1.99996L2.3606 4.19369L11.6956 13.5287L21.0306 4.19369L18.8369 1.99996Z" fill="currentColor" />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="px-6 pt-2 pb-4 style-body-small text-blue max-w-2xl">
            We can arrange returns if your order arrives with faults. If you are otherwise dissatisfied with your purchase or if something went wrong with your order, please <Link href="/contact">contact us</Link> and we will do our best to solve it
            with you.
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </section>
  );
}

export default Accordion;
