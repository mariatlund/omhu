"use client";

import Button from "@/components/Button/Button";
import Checkbox from "@/components/InputFields/Checkbox/Checkbox";
import ColourSelect from "@/components/InputFields/Selectors/ColourSelect/ColourSelect";
import Radio from "@/components/InputFields/Radio/Radio";
import Select from "@/components/InputFields/Selectors/Select/Select";
import TextInput from "@/components/InputFields/TextInput/TextInput";
import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import FilterMenu from "@/components/Menu/FilterMenu";
import SortMenu from "@/components/Menu/SortMenu";
import QuantitySelector from "@/components/InputFields/Selectors/QuantitySelector";
import MetalColorSelector from "../../components/InputFields/Selectors/MetalColorSelector";
import Reviews from "@/modules/Reviews/Reviews";
import ContactBox from "@/modules/ContactBox/ContactBox";
import HeroSection from "@/modules/HeroSection/HeroSection";

const coloursArray = [
  {
    value: "5774",
    label: "Mustard",
    hexCode: "#C99136",
  },
  {
    value: "5771",
    label: "Turquoise",
    hexCode: "#2C6B7E",
  },
  {
    value: "5772",
    label: "Blue",
    hexCode: "#6B6BEC",
  },
  {
    value: "765",
    label: "Brown",
    hexCode: "#60342C",
  },
];
const colorOptions = {
  brown: {
    label: "Brown",
    value: "765",
    hexCode: "#60342C",
    images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg"],
  },
  cream_white: {
    label: "Cream White",
    value: "763",
    hexCode: "#EEE6E4",
    images: [
      "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white.jpg",
      "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white_closeup.jpg",
      "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white_full.jpg",
    ],
  },
  turquoise: {
    label: "Turquoise",
    value: "5771",
    hexCode: "#2C6B7E",
    images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise_full.jpg"],
  },
  green: {
    label: "Green",
    value: "768",
    hexCode: "#3D5648",
    images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/green.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/green_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/green_full.jpg"],
  },
  mustard_yellow: {
    label: "Mustard yellow",
    value: "5774",
    hexCode: "#C99136",
    images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard_full.jpg"],
  },
  dark_orange: {
    label: "Dark orange",
    value: "769",
    hexCode: "#914525",
    images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/orange.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/orange_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/orange_full.jpg"],
  },
};
const countriesArray = [
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
];

//create a type for filteroptions

type FilterOptions = {
  category: string[];
  price: {
    min: number;
    max: number;
  };
};

export default function Testpage() {
  const [selectedColour, setSelectedColour] = useState<string | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>({
    category: [],
    price: {
      min: 0,
      max: 0,
    },
  });
  const [selectedSort, setSelectedSort] = useState<string>("Most Popular");
  const [counter, setCounter] = useState<number>(0);
  const [selectedMetalColor, setSelectedMetalColor] = useState<string | undefined>();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("run");
    setSelectedFilter((prevValues) => {
      if (e.target.checked) {
        return {
          ...prevValues,
          category: [...prevValues.category, e.target.value],
        };
      } else {
        return {
          ...prevValues,
          category: prevValues.category.filter((v) => v !== e.target.value),
        };
      }
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("run2");
    setSelectedFilter((prevValues) => {
      let newPrice = { ...prevValues.price };
      if (e.target.name === "min_price") {
        newPrice = {
          ...newPrice,
          min: parseInt(e.target.value),
        };
        console.log("min", e.target.value);
      } else {
        newPrice = {
          ...newPrice,
          max: parseInt(e.target.value),
        };
        console.log("max", e.target.value);
      }
      return {
        ...prevValues,
        price: newPrice,
      };
    });
  };

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(e.target.value);
  };

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };
  const handleMetalColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMetalColor(e.target.value);
  };

  //when we have the data we can write the filtering function here based on the selectedFilter array

  return (
    <>
      <HeroSection />
      <div className="mt-5 mb-14 md:mt-14 md:mb-20">
        <div className="container">
          <h1 className="style-h1">H1 headline</h1>
          <h2 className="style-h2">H2 headline</h2>
          <h3 className="style-h3">H3 headline</h3>
          <h4 className="style-h4">H4 headline</h4>
          <p className="style-x-small">Body x-small</p>
          <p className="style-small">Body small</p>
          <p className="style-body">Body medium</p>
        </div>

        <div className="container bg-grey-50 mt-10 space-y-5 py-5">
          <div className="flex gap-5 ">
            <Button intent="primary" kind="link" href="#" size="large" label="Test button" />
            <Button intent="secondary" kind="link" href="#" size="large" label="Test button" />
            <Button intent="alternative" kind="link" href="#" size="large" label="Test button" />

            <Button intent="primary" kind="link" href="#" size="large" label="Test button" icon="arrow" />
            <Button intent="secondary" kind="link" href="#" size="large" label="Test button" icon="filter" />
            <Button intent="alternative" kind="link" href="#" size="large" label="Test button" icon="sort" />
          </div>

          <div className="flex gap-5">
            <Button intent="primary" kind="link" href="#" size="small" label="Test button" />
            <Button intent="secondary" kind="link" href="#" size="small" label="Test button" />
            <Button intent="alternative" kind="link" href="#" size="small" label="Test button" />

            <Button intent="primary" kind="link" href="#" size="small" label="Test button" icon="arrow" />
            <Button intent="secondary" kind="link" href="#" size="small" label="Test button" icon="filter" />
            <Button intent="alternative" kind="link" href="#" size="small" label="Test button" icon="sort" />
          </div>
        </div>

        <div className="container mt-10 flex gap-5">
          <TextInput type="text" label="Label" placeholder="Placeholder" fieldName="text" />
          <div className="space-y-5">
            <Select options={countriesArray} selectedOptionValue={selectedCountry} onChange={setSelectedCountry} placeholder="Select country" />
            {/* <ColourSelect options={coloursArray} selectedOptionValue={selectedColour} onChange={setSelectedColour} defaultOption={coloursArray[0]} containerClass="w-60" /> */}
          </div>
          <div className="space-y-2">
            <Checkbox label="This is a checkbox" value="Indeed" name="checkbox" />
            <Checkbox label="This one as well" value="Indeed" name="checkbox" />
          </div>
          <div className="space-y-2">
            <Radio label="I'm an option" value="Option1" defaultChecked={true} fieldName="radio" />
            <Radio label="So am I, pick me" value="Option2" fieldName="radio" />
          </div>
          <div className="space-y-2">
            <QuantitySelector onChangeQuantity={handleQuantity} counter={counter} setCounter={setCounter} />
          </div>
          {/* <div className="space-y-2">
            <MetalColorSelector onChangeMetalColor={setSelectedMetalColor} selectedMetalColor={selectedMetalColor} />
          </div> */}
        </div>

        <div className="container flex flex-col gap-20">
          <ProductCard productName={"Teddy"} price={1200} productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"} newlyAdded={true} colors={colorOptions} id={36} />
          <div className="flex flex-row justify-between">
            <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} />
            <SortMenu handleSort={handleSort} />
          </div>
          <ContactBox />
          <Reviews title="" />
        </div>
      </div>
    </>
  );
}
