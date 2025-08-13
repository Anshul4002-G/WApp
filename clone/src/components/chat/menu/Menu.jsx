import React, { useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Search from "./Search";
import Conversatons from "./Conversatons";

export default function Menu() {
  const [text, settext] = useState("");
  return (
    <Box>
      <Header />
      <Search settext={settext} />
      <Conversatons text={text} />
    </Box>
  );
}
