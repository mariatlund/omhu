import { Meta, StoryObj } from "@storybook/react";
import PriceBox from "./PriceBox";

type Story = StoryObj<typeof PriceBox>;

export default {
  component: PriceBox,
} as Meta<typeof PriceBox>;

export const Default: Story = {
  args: {
    subtotal: "16.000,00",
    deliveryCost: "Free",
    total: "16.000,00",
  },
};
