import { Meta, StoryObj } from "@storybook/react";
import BasketOverview from "./BasketOverview";

type Story = StoryObj<typeof BasketOverview>;

export default {
  component: BasketOverview,
} satisfies Meta<typeof BasketOverview>;

export const Default: Story = {
  args: {
    total: "25.789",
    items: [
      {
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
        price: "12.899",
      },
      {
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
        price: "12.899",
      },
    ],
  },
};
