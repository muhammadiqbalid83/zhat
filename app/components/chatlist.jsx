"use client";

import { FaPlus } from "react-icons/fa";
import Search from "./search";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddUser from "./adduser";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  return (
    <ScrollArea>
      <div className="search flex items-center gap-[20px] p-[20px]">
        <div className="searchbar flex items-center gap-[20px] rounded-[10px] ">
          <Search />
        </div>
        <div onClick={() => setAddMode((prev) => !prev)}>
          {addMode ? (
            <Dialog>
              <DialogTrigger>
                <FaMinus className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex items-center space-x-2 mt-[20px]">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input id="link" defaultValue="username" readOnly />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    Search
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-[20px]">
                  <div className="flex items-center flex-1 gap-[10px]">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Muhammad Iqbal</p>
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    Tambah user
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog>
              <DialogTrigger>
                <FaPlus className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex items-center space-x-2 mt-[20px]">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input id="link" defaultValue="username" readOnly />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    Search
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-[20px]">
                  <div className="flex items-center flex-1 gap-[10px]">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Muhammad Iqbal</p>
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    Tambah user
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts flex flex-col ">
          <span className="font-medium">Salamah</span>
          <p className="text-[14px]">Halo</p>
        </div>
      </div>
      <Separator />

      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts">
          <span>Salamah</span>
          <p className="text-[14px]">Halo</p>
        </div>
      </div>
      <Separator />
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts">
          <span>Salamah</span>
          <p>Halo</p>
        </div>
      </div>
      <Separator />
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts">
          <span>Salamah</span>
          <p>Halo</p>
        </div>
      </div>
      <Separator />
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts">
          <span>Salamah</span>
          <p>Halo</p>
        </div>
      </div>
      <Separator />
      <div className="item flex items-center gap-[20px] p-[20px] cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="texts">
          <span>Salamah</span>
          <p>Halo</p>
        </div>
      </div>
      {addMode && <AddUser />}
      <Separator />
      <AddUser />
    </ScrollArea>
  );
}
