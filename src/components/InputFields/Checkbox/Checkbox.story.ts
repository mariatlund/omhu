import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../Checkbox/Checkbox";

type Story = StoryObj<typeof Checkbox>;

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "I agree to the terms & conditions",
    value: "OptIn",
  },
};
