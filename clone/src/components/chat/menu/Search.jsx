import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";

// Main container for the search bar, with a white background and a subtle border at the bottom.
const Component = styled(Box)`
  background: #f6f6f6;
  height: 49px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

// Wrapper for the search input and icon, providing the light grey background and rounded corners.
const Wrapper = styled(Box)`
  background-color: #e4e6eb;
  position: relative;
  width: 100%;
  border-radius: 10px;
  height: 35px;
  display: flex;
  align-items: center;
`;

// Styling for the search icon, positioned absolutely inside the wrapper.
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 0 15px;
  color: #54656f;
  display: flex;
  align-items: center;
`;

// The actual input field, which takes up the rest of the space.
const InputField = styled(InputBase)`
  width: 100%;
  padding: 0 15px;
  padding-left: 55px; /* Adjust padding to make space for the icon */
  font-size: 15px;
  color: #4a4a4a;
  &::placeholder {
    color: #54656f;
    font-size: 15px;
  }
`;

// The main component that assembles the search bar.
export default function Search({ settext }) {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField
          placeholder="Search or start new chat"
          onChange={(e) => settext(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
}
