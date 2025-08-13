import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

// Styling for the individual menu items.
const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

// Main component for the header menu.
export default function HeaderMenu({ setopenDrawer }) {
  // State to control the open/closed state of the menu.
  const [open, setOpen] = useState(null);

  // Handler to close the menu.
  const handleClose = () => {
    setOpen(null);
  };

  // Handler to open the menu and anchor it to the clicked element.
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      {/* The three-dot icon that acts as the menu anchor. */}
      <MoreVert onClick={handleClick} />
      {/* The Material UI Menu component. */}
      <Menu
        // A correct prop for the anchor element.
        anchorEl={open}
        keepMounted
        open={Boolean(open)} // Use Boolean(open) to ensure the value is a boolean.
        onClose={handleClose}
        // Fix for the typo: getContentAnchorEl. null ensures the menu anchors to the bottom of the icon.
        getContentAnchorEl={null}
        // This is the key change to align the menu to the bottom-right of the anchor icon.
        // The menu's top-right corner will align with the icon's bottom-right corner.
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setopenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
        <MenuOption onClick={handleClose}>Account</MenuOption>
        <MenuOption onClick={handleClose}>Setting</MenuOption>
        {/* You can add more menu items here */}
      </Menu>
    </>
  );
}
