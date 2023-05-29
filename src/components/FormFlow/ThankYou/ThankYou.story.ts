import { Meta, StoryObj } from "@storybook/react";
import ThankYou from "./ThankYou";

type Story = StoryObj<typeof ThankYou>;

export default {
  component: ThankYou,
} as Meta<typeof ThankYou>;

export const Default: Story = {
  args: {},
};
