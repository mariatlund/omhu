import { Meta, StoryObj } from "@storybook/react";
import StepIndicator from "./StepIndicator";

type Story = StoryObj<typeof StepIndicator>;

export default {
  component: StepIndicator,
} satisfies Meta<typeof StepIndicator>;

export const Default: Story = {
  args: {
    activeStep: "1",
  },
};
