import { Meta, StoryObj } from "@storybook/react";
import Summary from "./Summary";

type Story = StoryObj<typeof Summary>;

export default {
  component: Summary,
} as Meta<typeof Summary>;

export const Default: Story = {
  args: {},
};
