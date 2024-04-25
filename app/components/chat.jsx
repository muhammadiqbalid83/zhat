"use client";

import EmojiPicker from "emoji-picker-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaPhone } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat border-x-[1px] flex flex-2 h-full flex-col">
      <div className="top flex items-center justify-between p-[20px]">
        <div className="user flex gap-[20px] items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="texts flex flex-col ">
            <span className="font-medium">Muhammad Iqbal</span>
            <p className="text-[14px]">
              Frontend Developer working with react ecosystem
            </p>
          </div>
        </div>

        <div className="icons flex gap-[10px]">
          <FaPhone />
          <IoVideocam />
          <IoInformationCircle />
        </div>
      </div>
      <Separator />

      {/* CENTER */}
      <ScrollArea className="center flex flex-1 p-[20px] flex-col gap-[20px] ">
        <div className="message flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="texts">
            <p className="bg-[#f4f4f5] rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>

        <div class="flex justify-end">
          <div className="w-[70%] ">
            <p className="bg-[#18181b] text-white rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>

        <div className="message flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="texts">
            <p className="bg-[#f4f4f5] rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>

        <div class="flex justify-end">
          <div className="w-[70%] ">
            <p className="bg-[#18181b] text-white rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>

        <div className="message flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="texts">
            <p className="bg-[#f4f4f5] rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>

        <div class="flex justify-end">
          <div className="w-[70%] ">
            <p className="bg-[#18181b] text-white rounded-md p-[10px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              facere modi natus laudantium alias delectus, nobis iste sequi
              consectetur officiis cum eaque facilis ratione, at cupiditate?
            </p>
            <span className="text-[12px]">1 menit yang lalu</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </ScrollArea>
      <div className="bottom flex justify-between items-center p-[20px] gap-[10px] mt-auto">
        <div className="icons flex gap-[10px]">
          <FaRegImage />
          <FaCamera />
          <FaMicrophone />
        </div>
        <Input
          className="flex-1"
          placeholder="ketikan sebuah pesan"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji relative">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <MdEmojiEmotions size={20} />
          </div>
          <div className="picket absolute bottom-12 left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <Button>Kirim</Button>
      </div>
    </div>
  );
}
