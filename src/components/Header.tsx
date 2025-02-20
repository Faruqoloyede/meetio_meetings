import { MdOutlineContentCopy } from "react-icons/md";
import { participants } from "../constants";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    const getDateTimeInWords = () => {
        const now = new Date();
      
        const formattedDate = now.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      
        const formattedTime = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      
        return `${formattedDate} . ${formattedTime}`;
      };
    
    
  return (
    <header className='relative py-6 border-b-[1px] border-[#D9D9D94A]'>
        <nav className='flex items-center justify-between mx-auto max-w-[1440px] px-10 max-xl:px-10 max-lg:px-6 max-sm:px-4'>
            <div className="flex flex-col items-start gap-1">
                <h4 className="text-[32px] text-white font-light">Meetio Designers Meeting</h4>
                <p className="text-xl font-normal text-[#FFFFFF80]">{getDateTimeInWords()}</p>
            </div>
            <div className="flex items-center bg-[#0000003B] p-2 gap-1 rounded-full">
                <img src="/user3.png" alt="user" />
                <p className="text-[#FFFFFF80] text-xs">Hosted by: <span className="text-white">Pelvin Olusegun</span></p>
            </div>
            {/* stack images */}
            <div className="relative inline-block">
                <div className="flex items-center bg-[#0000003B] p-2 rounded-full gap-2">
                    <div className="flex">
                        {participants.slice(0, 5).map((person, index)=>(
                            <img src={person.image} alt={person.name} key={index} className="w-8 h-8 rounded-full object-cover -ml-5 first:ml-0" />
                        ))}
                    </div>
                    <span className="text-xs text-[#FFFFFF80]">{participants.length} participants</span>
                    <span className="text-[30px] cursor-pointer text-white" onClick={()=> setOpen((prev)=> !prev)}><RiArrowDropDownLine /></span>
                </div>
                {/* dropdown */}
                {open && (
                    <div className="absolute z-[1000] left-0 mt-2 w-58 bg-[#040404DB] rounded-lg shadow-lg p-3 transition duration-500">
                    {participants.map((person, index)=>(
                        <div className="flex items-center space-x-7 p-3" key={index}>
                            <img src={person.image} alt={person.name}  className="w-8 h-8"/>
                            <span className="text-sm text-white">{person.name}</span>
                        </div>
                    ))}
                </div>
                )}
            </div>
            <div className="flex items-center bg-white p-2 gap-1 rounded-full">
                <p className="text-xs font-medium">meetio.com/gyh-huy-hij</p>
                <MdOutlineContentCopy className="text-[18px] ml-3" />
            </div>
        </nav>
    </header>
  )
}

export default Header