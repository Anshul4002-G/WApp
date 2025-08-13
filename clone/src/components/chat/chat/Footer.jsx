import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { useEffect } from "react";
import { UploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: 84%;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const CLipIcon = styled(AttachFileOutlinedIcon)`
  transform: rotate(39deg);
`;
export default function Footer({
  setImage,
  file,
  setfile,
  setvalue,
  SendText,
  value,
}) {
  const onFileChange = (e) => {
    setfile(e.target.files[0]);
    setvalue(e.target.files[0].name);
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await UploadFile(data);
        console.log("getimage", response);
        // setImage(response.data);
      }
    };
    getImage();
  }, [file]);
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput">
        <CLipIcon />
      </label>

      <input
        type="file"
        id="fileInput"
        onChange={(e) => onFileChange(e)}
        style={{ display: "none" }}
      />
      <Search>
        <InputField
          placeholder="Type your message"
          onChange={(e) => setvalue(e.target.value)}
          onKeyPress={(e) => SendText(e)}
          value={value}
        />
      </Search>
      <MicOutlinedIcon />
    </Container>
  );
}
