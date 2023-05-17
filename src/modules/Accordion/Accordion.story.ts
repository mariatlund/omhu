import { Meta, StoryObj } from "@storybook/react";
import Accordion from "../Accordion/Accordion";

type Story = StoryObj<typeof Accordion>;

export default {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export const Default: Story = {};
