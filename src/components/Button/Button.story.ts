import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button/Button";

type Story = StoryObj<typeof Button>;

export default {
  component: Button,
} as Meta<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
    size: "large",
    label: "Click here",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    size: "large",
    label: "Click here",
  },
};

export const Alternative: Story = {
  args: {
    intent: "alternative",
    size: "large",
    label: "Click here",
  },
};
