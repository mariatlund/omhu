import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import SortSettings from "./SortSettings";

export interface SortMenuProps {
  handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SortMenu({ handleSort }: SortMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative">
      <Button intent={showMenu ? "primary" : "secondary"} kind="base" size="large" label="Sort" icon={showMenu ? "close" : "sort"} callback={() => setShowMenu(!showMenu)} />
      {showMenu && <SortSettings onChangeSort={handleSort} />}
    </div>
  );
}

export default SortMenu;
