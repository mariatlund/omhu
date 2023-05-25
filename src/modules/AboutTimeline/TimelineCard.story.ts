import { Meta, StoryObj } from "@storybook/react";
import TimelineCard from "./TimelineCard";
import teddyImg from "../../assets/about/teddy.jpg";

type Story = StoryObj<typeof TimelineCard>;

export default {
  component: TimelineCard,
} satisfies Meta<typeof TimelineCard>;

export const Default: Story = {
  args: {
    year: "2018",
    title: "Passion for vintage",
    description:
      "OMHU is the product of a 30-year friendship that has always revolved around our shared passion for furniture design and interior decor. After years of dreaming and planning, we decided to take the leap and pursue our dream. OMHU is the product of a 30-year friendship that has always revolved around our shared passion for furniture design and interior decor. After years of dreaming and planning, we decided to take the leap and pursue our dream. ",
    image: {
      imageSrc: teddyImg,
      imageHeight: 972,
      imageWidth: 778,
    },
  },
};
