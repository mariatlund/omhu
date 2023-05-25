import { Meta, StoryObj } from "@storybook/react";
import BillingDetails from "./BillingDetails";

type Story = StoryObj<typeof BillingDetails>;

export default {
  component: BillingDetails,
} satisfies Meta<typeof BillingDetails>;

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
