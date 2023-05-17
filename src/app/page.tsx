"use client";

import Button from "@/components/Button/Button";
import Navigation from "@/components/Menu/Navigation";
import Checkbox from "@/components/InputFields/Checkbox/Checkbox";
import ColourSelect from "@/components/InputFields/ColourSelect/ColourSelect";
import Radio from "@/components/InputFields/Radio/Radio";
import Select from "@/components/InputFields/Select/Select";
import TextInput from "@/components/InputFields/TextInput/TextInput";
import { useState } from "react";
import { Layout } from "@/app/pageLayout";
import ProductCard from "@/components/Cards/ProductCard";
import FilterMenu from "@/components/Menu/FilterMenu";
import SortMenu from "@/components/Menu/SortMenu";

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
const hexCodesArray = ["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00", "#0000ff", "#0000ff", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"];

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

export default function Home() {
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

  const handleFilter = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedFilter((prevValues) => {
        return {
          ...prevValues,
          category: [...prevValues.category, value],
        };
      });
    } else {
      setSelectedFilter((prevValues) => {
        return {
          ...prevValues,
          category: prevValues.category.filter((v) => v !== value),
        };
      });
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  //when we have the data we can write the filtering function here based on the selectedFilter array

  return (
    <>
      <Layout>
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
              <ColourSelect options={coloursArray} selectedOptionValue={selectedColour} onChange={setSelectedColour} defaultOption={coloursArray[0]} containerClass="w-60" />
            </div>
            <div className="space-y-2">
              <Checkbox label="This is a checkbox" value="Indeed" fieldName="checkbox" />
              <Checkbox label="This one as well" value="Indeed" fieldName="checkbox" />
            </div>
            <div className="space-y-2">
              <Radio label="I'm an option" value="Option1" defaultChecked={true} fieldName="radio" />
              <Radio label="So am I, pick me" value="Option2" fieldName="radio" />
            </div>
          </div>
          <div className="container">
            <ProductCard productName={"Teddy"} price={1200} productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"} newlyAdded={true} colors={hexCodesArray} />
            <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} />
          </div>
        </div>

        <div className="space-y-2">
          <Checkbox label="This is a checkbox" value="Indeed" fieldName="checkbox" />
          <Checkbox label="This one as well" value="Indeed" fieldName="checkbox" />
        </div>
        <div className="space-y-2">
          <Radio label="I'm an option" value="Option1" defaultChecked={true} fieldName="radio" />
          <Radio label="So am I, pick me" value="Option2" fieldName="radio" />
        </div>

        <ProductCard productName={"Teddy"} price={1200} productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"} newlyAdded={true} colors={hexCodesArray} />
        <div className="flex flex-row justify-between">
          <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} />
          <SortMenu handleSort={handleSort} />
        </div>
      </Layout>
    </>
  );
}
