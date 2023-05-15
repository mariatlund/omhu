import { Meta, StoryObj } from "@storybook/react";
import Radio from "../Radio/Radio";

type Story = StoryObj<typeof Radio>;

export default {
  component: Radio,
} as Meta<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Category name",
    value: "Category1",
  },
};
