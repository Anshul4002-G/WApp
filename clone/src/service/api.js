import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("erorr while calling add user api ");
  }
};

export const getUser = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (err) {
    console.log("unable to fetch users ");
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("error while setting conversation");
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("error while getting conversation");
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("error while calling mesasages ");
  }
};

export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("error to get messages ");
  }
};

export const UploadFile = async (data) => {
  try {
    console.log("in uploadfile api", data);
    return await axios.post(`${url}/file/upload`, data);
  } catch (err) {
    console.log("errror while uploading the file ", err);
  }
};
