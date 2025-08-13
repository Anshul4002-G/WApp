import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessage, newMessage } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url("https://e0.pxfuel.com/wallpapers/722/149/desktop-wallpaper-message-background-whatsapp-message-background.jpg");
  background-size: 32%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

export default function Messages({ conversation, person }) {
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const [value, setvalue] = useState("");
  const [messages, setmessages] = useState([]);
  const [file, setfile] = useState();
  const [image, setImage] = useState("");
  const scrollRef = useRef();

  const [incomeingmesg, setIncomingMessage] = useState(null);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      setmessages(data);
    };
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createdAt: Date.now() });
    });
  });

  useEffect(() => {
    incomeingmesg &&
      conversation?.members?.includes(incomeingmesg.senderId) &&
      setmessages((prev) => [...prev, incomeingmesg]);
  }, [incomeingmesg, conversation]);

  const SendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setvalue("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message, index) => (
            <Container ref={scrollRef}>
              <Message key={index} message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        SendText={SendText}
        file={file}
        setfile={setfile}
        setvalue={setvalue}
        value={value}
        setImage={setImage}
      />
    </Wrapper>
  );
}
