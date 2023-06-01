import { ImagesType } from "./images";

export type AccordionType = {
  question: string;
  answer: string | JSX.Element | JSX.Element[];
  image?: ImagesType[];
};
