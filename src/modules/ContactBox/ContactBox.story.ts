import { Meta, StoryObj } from "@storybook/react";
import ContactBox from "./ContactBox";

type Story = StoryObj<typeof ContactBox>;

export default {
  component: ContactBox,
} as Meta<typeof ContactBox>;

export const Default: Story = {
  args: {},
};
