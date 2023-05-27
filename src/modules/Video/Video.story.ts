import { Meta, StoryObj } from "@storybook/react";
import Video from "./Video";

type Story = StoryObj<typeof Video>;

export default {
  component: Video,
} as Meta<typeof Video>;

export const Default: Story = {
  args: {
    title: "Test title",
    videoSrc: "https://vimeo.com/783453158",
    videoThumbnail: {
      imageSrc: "https://images.unsplash.com/photo-1571838475231-bb5aa087c797",
      alt: "video thumbnail",
    },
  },
};

export const NoThumbnail: Story = {
  args: {
    title: "Test title",
    videoSrc: "https://vimeo.com/783453158",
  },
};
