import { Meta, StoryObj } from "@storybook/react";
import AboutTimeline from "./AboutTimeline";

type Story = StoryObj<typeof AboutTimeline>;

export default {
  component: AboutTimeline,
} satisfies Meta<typeof AboutTimeline>;

export const Default: Story = {
  args: {},
};
