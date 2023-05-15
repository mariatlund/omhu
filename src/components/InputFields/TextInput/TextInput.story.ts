import { Meta, StoryObj } from "@storybook/react";
import TextInput from "../TextInput/TextInput";

type Story = StoryObj<typeof TextInput>;

export default {
  component: TextInput,
} as Meta<typeof TextInput>;

export const Text: Story = {
  args: {
    type: "text",
    label: "Test label",
    placeholder: "Test placeholder",
    errorMessage: "This is an error message",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    label: "Email address",
    placeholder: "apple@johnbottom.com",
  },
};

export const Phone: Story = {
  args: {
    type: "tel",
    label: "Phone number",
    placeholder: "+45 72853829",
  },
};
