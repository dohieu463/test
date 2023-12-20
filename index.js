import React, { useState } from 'react'
import * as data from "../sample-data"


const baseURL = "http://api.trinhducminh.id.vn/api/v1"
var accessToken = ""
const getTaskList = () => {
  return data.TASK_LIST
}

const getWorkspaceList = () => {
  return data.WORKSPACE_LIST
}

const getUserList = () => {
  return data.USER_LIST
}

const getGroupList = () => {
  return data.GROUP_LIST
}

const handleLogin = async (username, password) => {
  const response = await (fetch('http://api.trinhducminh.id.vn/api/v1/auth/login'), {
    "method": "POST",
    "headers": {
      "Content-Type": 'application/json'
    },

    body: JSON.stringify({
      "email": username,
      "pwd": password
    }),
  });
  console.log(response);
  console.log(response.json);
  const data = await response.json;

  if (response.accessToken) {
    accessToken = data.accessToken
  }
}
export { getGroupList, getUserList, getWorkspaceList, getTaskList, handleLogin }