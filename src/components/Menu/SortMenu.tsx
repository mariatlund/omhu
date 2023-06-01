import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import SortSettings from "./SortSettings";

export interface SortMenuProps {
  handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSort: string;
}

function SortMenu({ handleSort, selectedSort }: SortMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button intent="secondary" kind="base" size="large" label="Sort" icon={showMenu ? "close" : "sort"} callback={() => setShowMenu(!showMenu)} />
      {showMenu && <SortSettings onChangeSort={handleSort} selectedSort={selectedSort} />}
    </div>
  );
}

export default SortMenu;
