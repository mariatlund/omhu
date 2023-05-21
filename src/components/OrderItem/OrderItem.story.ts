import { Meta, StoryObj } from "@storybook/react";
import OrderItem from "./OrderItem";

type Story = StoryObj<typeof OrderItem>;

export default {
  component: OrderItem,
} satisfies Meta<typeof OrderItem>;

export const Default: Story = {
  args: {
    productName: "Teddy",
    fabricColour: "Dusty Green",
    frameColour: "Chrome",
    amount: "1",
    price: "12.899,00",
  },
};
