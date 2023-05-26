import { Meta, StoryObj } from "@storybook/react";
import PaymentDetails from "./PaymentDetails";

type Story = StoryObj<typeof PaymentDetails>;

export default {
  component: PaymentDetails,
} satisfies Meta<typeof PaymentDetails>;

export const Default: Story = {
  args: {
    countryOptions: [
      {
        value: "DK",
        label: "Denmark",
      },
      {
        value: "UK",
        label: "United Kingdom",
      },
      {
        value: "US",
        label: "United States",
      },
      {
        value: "SE",
        label: "Sweden",
      },
    ],
  },
};
