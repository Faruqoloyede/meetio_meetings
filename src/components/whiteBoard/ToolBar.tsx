import { MdOutlineRectangle } from "react-icons/md";
import { GiArrowCursor } from "react-icons/gi";
import { RxText } from "react-icons/rx";
import { BiImage } from "react-icons/bi";
import { HiOutlineLink } from "react-icons/hi2";
import { BiSolidMessageRounded } from "react-icons/bi";

const ToolBar = () => {
    return (
      <div className="bg-teal-600 p-3 flex flex-col items-center rounded-lg space-y-4 absolute top-32 z-40 left-10">
        <button className="text-white text-2xl p-2"><GiArrowCursor /></button>
        <button className="text-white text-2xl p-2"><MdOutlineRectangle /></button>
        <button className="text-white text-2xl p-2"><RxText /></button>
        <button className="text-white text-2xl p-2"><BiImage /></button>
        <button className="text-white text-2xl p-2"><HiOutlineLink /></button>
        <button className="text-white text-2xl p-2"><BiSolidMessageRounded /></button>
      </div>
    );
  };
  
  export default ToolBar;
  