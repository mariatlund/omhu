import { Meta, StoryObj } from "@storybook/react";
import PaymentDetails from "./PaymentDetails";

type Story = StoryObj<typeof PaymentDetails>;

export default {
  component: PaymentDetails,
} as Meta<typeof PaymentDetails>;

export const Default: Story = {
  args: {},
};
