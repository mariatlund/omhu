import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import measurements from "../../assets/mesurments_teddyFolded.svg";

type Story = StoryObj<typeof Accordion>;

export default {
  component: Accordion,
} as Meta<typeof Accordion>;

export const Faq: Story = {
  args: {
    title: "Delivery",
    items: [
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
    ],
  },
};

export const ProductInfo: Story = {
  args: {
    title: "Product Information",
    items: [
      {
        question: "Measurements",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus placeat totam autem consequatur reiciendis numquam velit id rerum magnam consectetur deserunt nihil eveniet voluptatum accusantium ut.",
        // imageSrc: measurements,
      },
    ],
  },
};
