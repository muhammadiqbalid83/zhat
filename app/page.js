"use client";

import { Card } from "@/components/ui/card";
import Chat from "./components/chat";
import Detail from "./components/detail";
import List from "./components/list";
import Login from "./auth/login";

export default function Home() {
  const user = false;

  return (
    <>
      <div className="container flex justify-between items-center h-screen">
        <Card className="flex justify-between  w-full h-[90vh] mt-2">
          {user ? (
            <>
              <List />
              <Chat />
              <Detail />
            </>
          ) : (
            <div className="flex justify-center items-center h-screen w-screen">
              <Login />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
