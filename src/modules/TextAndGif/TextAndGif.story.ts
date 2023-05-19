import { Meta, StoryObj } from "@storybook/react";
import TextAndGif from "./TextAndGif";
import { text } from "stream/consumers";

type Story = StoryObj<typeof TextAndGif>;

export default {
  component: TextAndGif,
} satisfies Meta<typeof TextAndGif>;

export const Default: Story = {
  args: {
    title: "Title goes here",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto provident deleniti suscipit id ratione repudiandae animi saepe temporibus blanditiis, asperiores voluptas aspernatur voluptate, exercitationem voluptates quisquam ea dolorem cumque?",
    image: {
      imageSrc: "https://storage.googleapis.com/apt2b-wp/media/2019/04/c1644a9b-harper-sleeper-sofa-2.gif",
      imageHeight: 359,
      imageWidth: 664,
      alt: "Sofa bed unfolding",
    },
  },
};
