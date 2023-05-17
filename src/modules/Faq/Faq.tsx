import React from "react";

const deliveryQuestions = [
  {
    question: "Which countries do you deliver to?",
    answer: "We currently deliver to Europe, the United Kingdom and the United States. If you're located somewhere else in the world, you can contact us to find out if we can arrange for delivery to your location.",
  },
  {
    question: "What are the costs for international shipping?",
    answer:
      "Shipping costs are included in the price for all purchases with delivery within Europe. For delivery to other countries, we will generate a custom price for you based on our agreement with our shipping partner. Enter your address when purchasing, and the delivery price will be generated for you.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "At the moment, we have wait times for production before delivery can take place. We do our best to keep you informed about your order, and will let you know the moment it ships. Once your order has shipped it usually takes between one and two weeks to arrive depending on your location.",
  },
];

const productQuestions = [
  {
    question: "How can I clean and maintain my TEDDY sofa?",
    answer:
      "The covers on your TEDDY sofa can easily be unzipped and removed from both the mattresses and pillows and washed at low temperature. It is recommended to turn the covers inside out and to wash them at max 30 degress celcius med mild or extra gentle detergent.",
  },
  {
    question: "Where are OMHU's products produced?",
    answer: "We currently have our production based in Poland, where our mattresses, covers and metal frames are made. We also work with an upholsterer based in Denmark.",
  },
];

const returnsQuestions = [
  {
    question: "Do you have a return policy?",
    answer: "We can arrange returns if your order arrives with faults. If you are otherwise dissatisfied with your purchase or if something went wrong with your order, please contact usand we will do our best to solve it with you.",
  },
];

interface FaqProps {
  title: string;
}

function Faq({ title }: FaqProps) {
  return <section>{/* map through Faq sections here */}</section>;
}

export default Faq;
