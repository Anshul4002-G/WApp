import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
  background-color: #fff; /* Changed for a cleaner look */
`;

const NewDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

export default function Conversations({ text }) {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        // Filter users based on search text and exclude the current user
        const filteredUsers = response.filter(
          (user) =>
            user.sub !== account.sub &&
            user.name.toLowerCase().includes(text.toLowerCase())
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [text, account]); // Added account to the dependency array

  useEffect(() => {
    if (socket.current) {
      socket.current.emit("addUser", account);
      socket.current.on("getUsers", (users) => {
        setActiveUsers(users);
      });
    }
  }, [account]); // Added dependencies

  return (
    <Component>
      {users.map((user) => (
        <React.Fragment key={user.sub}>
          <Conversation user={user} />
          <NewDivider />
        </React.Fragment>
      ))}
    </Component>
  );
}
