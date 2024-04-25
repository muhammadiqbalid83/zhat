import React from "react";
import UserInfo from "./userinfo";
import ChatList from "./chatlist";

export default function List() {
  return (
    <div className="flex flex-col">
      <UserInfo />
      <ChatList />
    </div>
  );
}
