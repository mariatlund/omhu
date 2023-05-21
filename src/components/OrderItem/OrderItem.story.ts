import { Meta, StoryObj } from "@storybook/react";
import OrderItem from "./OrderItem";

type Story = StoryObj<typeof OrderItem>;

export default {
  component: OrderItem,
} satisfies Meta<typeof OrderItem>;

export const Default: Story = {
  args: {
    productName: "Teddy",
    fabricColour: "Blue",
    fabricHex: "#6B6BEC",
    frameColour: "Chrome",
    frameHex: "#919190",
    amount: "1",
    price: "12.899,00",
  },
};
