import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IoMdDownload } from "react-icons/io";

export default function Detail() {
  return (
    <div className="detail w-[700px]">
      <div className="user flex flex-col items-center gap-[20px] py-[30px] px-[20px]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <h2>Salamah</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur</p>
      </div>
      <Separator />
      <div className="info p-[20px] flex flex-col object-cover gap-[20px]">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="">Chat Settings</span>
            <FaArrowUp />
          </div>
        </div>

        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="">Privacy % help</span>
            <FaArrowUp />
          </div>
        </div>

        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="">Shared photos</span>
            <FaArrowDown />
          </div>
          <div className="photos flex flex-col gap-[20px] mt-[20px]">
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-[50px]">
                <Image
                  src="https://picsum.photos/200"
                  width="40"
                  height="40"
                  alt="random"
                  className="object-cover rounded-md"
                />
                <span>photo_2024_2.png</span>
              </div>
              <IoMdDownload />
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-[50px]">
                <Image
                  src="https://picsum.photos/200"
                  width="40"
                  height="40"
                  alt="random"
                  className="object-cover rounded-md"
                />
                <span>photo_2024_2.png</span>
              </div>
              <IoMdDownload />
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-[50px]">
                <Image
                  src="https://picsum.photos/200"
                  width="40"
                  height="40"
                  alt="random"
                  className="object-cover rounded-md"
                />
                <span>photo_2024_2.png</span>
              </div>
              <IoMdDownload />
            </div>

            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-[50px]">
                <Image
                  src="https://picsum.photos/200"
                  width="40"
                  height="40"
                  alt="random"
                  className="object-cover rounded-md"
                />
                <span>photo_2024_2.png</span>
              </div>
              <IoMdDownload />
            </div>
            <Image />
          </div>
        </div>

        <div className="option">
          <div className="title flex items-center justify-between">
            <span className="">Shared files</span>
            <FaArrowUp />
          </div>
        </div>
        <Button>Block User</Button>
        <Button variant="outline">Logout</Button>
      </div>
    </div>
  );
}
