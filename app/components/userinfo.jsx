import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosMore } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

export default function UserInfo() {
  return (
    <div className="flex justify-center items-center p-[20px]">
      <div className="flex items-center gap-[20px]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <h2>Muhammad Iqbal</h2>
      </div>
      <div className="flex gap-[20px] ml-[20px]">
        <IoIosMore />
        <IoIosVideocam />
        <FaEdit />
      </div>
    </div>
  );
}
