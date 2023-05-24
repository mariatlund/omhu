import { Meta, StoryObj } from "@storybook/react";
import TrendingNow from "./TrendingNow";

type Story = StoryObj<typeof TrendingNow>;

export default {
  component: TrendingNow,
} satisfies Meta<typeof TrendingNow>;

export const Default: Story = {
  args: {
    title: "Delivery",
  },
};
