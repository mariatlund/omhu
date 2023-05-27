import { Meta, StoryObj } from "@storybook/react";
import Summary from "./Summary";

type Story = StoryObj<typeof Summary>;

export default {
  component: Summary,
} satisfies Meta<typeof Summary>;

export const Default: Story = {
  args: {},
};
