import { Meta, StoryObj } from "@storybook/react";
import Reviews from "./Reviews";

type Story = StoryObj<typeof Reviews>;

export default {
  component: Reviews,
} as Meta<typeof Reviews>;

export const Default: Story = {
  args: {},
};
