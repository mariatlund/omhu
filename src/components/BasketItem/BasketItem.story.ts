import { Meta, StoryObj } from "@storybook/react";
import BasketItem from "./BasketItem";

type Story = StoryObj<typeof BasketItem>;

export default {
  component: BasketItem,
} satisfies Meta<typeof BasketItem>;

export const Default: Story = {
  args: {
    image: {
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013",
      height: 1054,
      width: 593,
    },
    productName: "Teddy",
    fabricColour: "Dusty green",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: 1,
    price: 12.899,
  },
};
