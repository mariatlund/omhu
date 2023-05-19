import { Meta, StoryObj } from "@storybook/react";
import IGfeed from "./IGfeed";

type Story = StoryObj<typeof IGfeed>;

export default {
  component: IGfeed,
} satisfies Meta<typeof IGfeed>;

export const Default: Story = {
  args: {},
};
