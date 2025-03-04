import { MdOutlineContentCopy } from "react-icons/md";
import { participants } from "../../constants";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";

const TopBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    
  return (
    <header className="relative py-4 border-b-[1px] border-[#D9D9D94A]">
        <nav className="flex flex-wrap items-center justify-between mx-auto max-w-[1440px] px-10 max-xl:px-10 max-lg:px-6 max-sm:px-4 gap-4">
            
            {/* Meeting Title & Date */}
            <div className="flex flex-col items-start gap-1 max-sm:w-full">
                <h4 className="text-[28px] max-sm:text-[20px] text-[#000000] font-light flex items-center gap-2">
                    <IoMdArrowRoundBack className="text-[30px] text-[#000000]" />
                    Whiteboard - Meetio
                </h4>
            </div>

            {/* Host Info */}
            <div className="flex items-center bg-[#008080] p-2 rounded-full gap-2 max-sm:w-full max-sm:justify-between">
                <img src="/user3.png" alt="user" className="w-8 h-8 rounded-full object-cover" />
                <p className="text-xs text-white">
                    Hosted by: <span className="text-white">Pelvin Olusegun</span>
                </p>
            </div>

            {/* Stack Images & Dropdown */}
            <div className="relative">
                <div className="flex items-center bg-[#008080] p-2 rounded-full gap-2 cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
                    <div className="flex">
                        {participants.slice(0, 5).map((person, index) => (
                            <img
                                src={person.image}
                                alt={person.name}
                                key={index}
                                className="w-8 h-8 rounded-full object-cover -ml-4 first:ml-0"
                            />
                        ))}
                    </div>
                    <span className="text-xs text-white">
                        {participants.length} participants
                    </span>
                    <RiArrowDropDownLine className="text-[30px] text-white" />
                </div>

                {/* Dropdown Menu */}
                {open && (
                    <div className="absolute z-[1000] left-1/2 -translate-x-1/2 max-sm:left-28 max-sm:w-full mt-2 w-60 bg-[#040404DB] rounded-lg shadow-lg p-3 transition-all duration-500">
                        {participants.map((person, index) => (
                            <div className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded-md" key={index}>
                                <img src={person.image} alt={person.name} className="w-8 h-8 rounded-full object-cover" />
                                <span className="text-sm text-white">{person.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Meeting Link */}
            <div className="flex items-center bg-[#008080] p-2 rounded-full gap-2 max-sm:w-full max-sm:justify-between">
                <p className="text-xs font-medium truncate text-white">meetio.com/gyh-huy-hij</p>
                <MdOutlineContentCopy className="text-[18px] text-white cursor-pointer" />
            </div>

        </nav>
    </header>
  );
};

export default TopBar;
