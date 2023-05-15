import { Meta, StoryObj } from "@storybook/react";
import TextInput from "../InputFields/TextInput";

type Story = StoryObj<typeof TextInput>;

export default {
  component: TextInput,
} as Meta<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Test label",
    placeholder: "Test placeholder",
    errorMessage: "This is an error message",
  },
};
