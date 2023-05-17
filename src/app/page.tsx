"use client";

import Button from "@/components/Button/Button";
import Navigation from "@/components/Navigation";
import Checkbox from "@/components/InputFields/Checkbox/Checkbox";
import ColourSelect from "@/components/InputFields/ColourSelect/ColourSelect";
import Radio from "@/components/InputFields/Radio/Radio";
import Select from "@/components/InputFields/Select/Select";
import TextInput from "@/components/InputFields/TextInput/TextInput";
import { useState } from "react";
import { Layout } from "@/app/pageLayout";

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

export default function Home() {
  const [selectedColour, setSelectedColour] = useState<string | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();

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
        </div>
      </Layout>
    </>
  );
}

// This should be the home / landing page for the website
