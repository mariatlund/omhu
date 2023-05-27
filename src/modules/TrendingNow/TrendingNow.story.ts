import { Meta, StoryObj } from "@storybook/react";
import TrendingNow from "./TrendingNow";

type Story = StoryObj<typeof TrendingNow>;

export default {
  component: TrendingNow,
} as Meta<typeof TrendingNow>;

export const Default: Story = {
  args: {},
};
