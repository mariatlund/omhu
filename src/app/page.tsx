"use client";
import Button from "@/components/Button/Button";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import OpenMenu from "@/components/OpenMenu";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className="p-10  bg-grey-50 static">
      <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu && <OpenMenu setShowMenu={setShowMenu} showMenu={showMenu} />}
      <h1 className="style-h1">H1 headline</h1>
      <h2 className="style-h2">H2 headline</h2>
      <h3 className="style-h3">H3 headline</h3>
      <h4 className="style-h4">H4 headline</h4>
      <p className="style-x-small">Body x-small</p>
      <p className="style-small">Body small</p>
      <p className="style-body">Body medium</p>

      <div className="flex gap-5 mt-10">
        <Button intent="primary" kind="link" href="#" size="large" label="Test button" />
        <Button intent="secondary" kind="link" href="#" size="large" label="Test button" />
        <Button intent="alternative" kind="link" href="#" size="large" label="Test button" />

        <Button intent="primary" kind="link" href="#" size="large" label="Test button" icon="arrow" />
        <Button intent="secondary" kind="link" href="#" size="large" label="Test button" icon="filter" />
        <Button intent="alternative" kind="link" href="#" size="large" label="Test button" icon="sort" />
      </div>

      <div className="flex gap-5 mt-10">
        <Button intent="primary" kind="link" href="#" size="small" label="Test button" />
        <Button intent="secondary" kind="link" href="#" size="small" label="Test button" />
        <Button intent="alternative" kind="link" href="#" size="small" label="Test button" />

        <Button intent="primary" kind="link" href="#" size="small" label="Test button" icon="arrow" />
        <Button intent="secondary" kind="link" href="#" size="small" label="Test button" icon="filter" />
        <Button intent="alternative" kind="link" href="#" size="small" label="Test button" icon="sort" />
      </div>
    </main>
  );
}

// This should be the home / landing page for the website
