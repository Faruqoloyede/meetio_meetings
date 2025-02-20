import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdInsertComment } from "react-icons/md";
import { footer } from "../constants";
import { useState } from "react";

const Footer = () => {
    const [visibleIcons, setVisibleIcons] = useState<{ [key: number]: boolean }>({});

    const toggleIcon = (userId: number) => {
        if (userId <= 2) {
            setVisibleIcons((prev) => ({
                ...prev,
                [userId]: !prev[userId],
            }));
        }
    };

    return (
        <section className="relative py-6 border-t-2 border-[#D9D9D94A]">
            <div className="mx-auto max-w-[1440px] px-10 max-xl:px-10 max-lg:px-6 max-sm:px-4">
                
                {/* Footer Layout */}
                <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
                    
                    {/* Logo / Title */}
                    <h4 className="text-white font-normal text-[16px]">Meetio</h4>

                    {/* Footer Icons */}
                    <div className="flex items-center gap-5 flex-wrap justify-center">
                        {footer.map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <div className={`${item.id === 5 ? "bg-[#FF0303] text-white" : "bg-white text-black"} p-4 rounded-full cursor-pointer`}>
                                    <span className="text-2xl" onClick={() => toggleIcon(item.id)}>
                                        {visibleIcons[item.id] ? item.icon2 : item.icon}
                                    </span>
                                </div>
                                <span className="text-white text-sm mt-2 capitalize">
                                    {visibleIcons[item.id] ? item.title2 : item.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-5 max-sm:mt-4">
                        <IoIosInformationCircleOutline className="text-[32px] text-white cursor-pointer" />
                        <MdInsertComment className="text-[32px] text-white cursor-pointer" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;
