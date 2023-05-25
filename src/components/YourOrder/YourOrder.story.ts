import { Meta, StoryObj } from "@storybook/react";
import YourOrder from "./YourOrder";

type Story = StoryObj<typeof YourOrder>;

export default {
  component: YourOrder,
} satisfies Meta<typeof YourOrder>;

export const Default: Story = {
  args: {
    order: [
      {
        productName: "Teddy",
        fabricColour: "Blue",
        fabricHex: "#6B6BEC",
        frameColour: "Chrome",
        frameHex: "#919190",
        amount: "1",
        price: "12.899,00",
      },
      {
        productName: "Teddy",
        fabricColour: "Blue",
        fabricHex: "#6B6BEC",
        frameColour: "Chrome",
        frameHex: "#919190",
        amount: "1",
        price: "12.899,00",
      },
    ],
    priceInfo: {
      subtotal: "16.000,00",
      deliveryCost: "Free",
      total: "16.000,00",
    },
    buttonLabel: "Continue to payment",
    checkboxes: "true",
  },
};
