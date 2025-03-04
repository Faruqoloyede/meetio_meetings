import { participants } from "../../constants";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBrowserMaximize } from "react-icons/tb";
import vector from "../../../public/Vector.png";
import video from "../../../public/video.png";
import { IoMdClose } from "react-icons/io";

const Video = () => {
  return (
    <div className="fixed top-32 right-20 z-40 bg-[#4D4D4D] p-3 shadow-lg min-w-[350px] min-h-[300px]">
        <div className="flex flex-col gap-2">
            <p className="text-xs text-white font-normal">Meetio.com</p>
            <div className="flex items-center justify-between">
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
                    <img src={vector} alt="icon" className="w-5 h-5 cursor-pointer" />
                 </div>
                 <div className="flex justify-end gap-2 text-white text-[28px] cursor-pointer">
                    <TbBrowserMaximize />
                    <IoMdClose />
                 </div>
            </div>
            <div className="">
                <img src={video} alt="man" className="object-contain w-[350px]" />
            </div>
        </div>
    </div>
  )
}

export default Video