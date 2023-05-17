import { Meta, StoryObj } from "@storybook/react";
import Faq from "./Faq";

type Story = StoryObj<typeof Faq>;

export default {
  component: Faq,
} satisfies Meta<typeof Faq>;

export const Default: Story = {
  args: {
    title: "Delivery",
  },
};
