import React from "react";
import { Box, Typography, styled, Divider } from "@mui/material";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
  background: #f8f9fa; /* Light background similar to WhatsApp Web */
  padding: 30px 0;
  border: 1px solid red;
  width: 1036px;
  text-align: center;
  height: 100vh; /* Ensures it takes full viewport height */
  display: flex; /* Use flexbox to center content */
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
`;

const Container = styled(Box)`
  padding: 0 20px; /* Reduced padding for responsiveness */
  width: 60%; /* Adjust width to make content more centered and compact */
  max-width: 600px; /* Max width to prevent content from stretching too wide */
`;

const Image = styled("img")({
  width: 320 /* Adjusted width for the image */,
  height: 250 /* Adjusted height for the image */,
  marginTop: 0 /* Remove top margin as flexbox handles centering */,
  marginBottom: 20 /* Add some bottom margin to separate from text */,
});

const Title = styled(Typography)`
  font-size: 35px; /* Slightly larger font size for the title */
  margin: 25px 0 10px 0;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial,
    sans-serif; /* WhatsApp-like font family */
  font-weight: 300;
  color: #41525d;
`;

const SubPara = styled(Typography)`
  font-size: 14px;
  color: #667781; /* Corrected color value */
  font-weight: 400;
  font-family: inherit;
  line-height: 20px; /* Add line height for better readability */
  margin-bottom: 10px; /* Spacing between paragraphs */
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
  width: 50%; /* Make divider shorter and centered */
  margin-left: auto;
  margin-right: auto;
`;

export default function Emptychat() {
  return (
    <>
      <Component>
        <Container>
          <Image src={emptyChatImage} alt="empty chat" />
          <Title>WhatsApp Web</Title>
          <SubPara>
            Now send and receive messages without keeping your phone online.
          </SubPara>
          <SubPara>
            Use WhatsApp on up to 4 linked devices and 1 Phone at the same time.
          </SubPara>

          <StyledDivider />
        </Container>
      </Component>
    </>
  );
}
