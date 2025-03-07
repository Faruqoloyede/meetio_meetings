import { participants } from "../../constants";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBrowserMaximize } from "react-icons/tb";
import vector from "../../../public/Vector.png";
import video from "../../../public/video.png";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Video = () => {
    const [show, setShow] = useState(true)
  return (
    <div className={`absolute top-28 right-20 z-40 bg-[#4D4D4D] p-2 shadow-lg  rounded-md ${show ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-2">
            <p className="text-xs text-white font-normal w-[50px]">Meetio.com</p>
            <div className="flex items-center justify-between gap-5">
                 <div className="flex items-center gap-2">
                 <div className="flex items-center bg-white p-1 rounded-full gap-2 cursor-pointer">
                    <div className="flex">
                        {participants.slice(0, 5).map((person, index) => (
                            <img
                                src={person.image}
                                alt={person.name}
                                key={index}
                                className="w-6 h-6 rounded-full object-cover -ml-3 first:ml-0"
                            />
                        ))}
                        
                    </div>
                    <span className="text-xs text-[#000000]">
                        {participants.length} participants
                    </span>
                        <RiArrowDropDownLine className="text-[30px] text-[#000000]" />
                    </div>
                    <img src={vector} alt="icon" className="w-3 h-3 cursor-pointer" />
                 </div>
                 <div className="flex justify-end gap-2 text-white text-sm cursor-pointer">
                    <TbBrowserMaximize />
                    <IoMdClose onClick={()=> setShow(false)} />
                 </div>
            </div>
            <div className="mt-3">
                <img src={video} alt="man" className="object-contain " />
            </div>
        </div>
    </div>
  )
}

export default Video