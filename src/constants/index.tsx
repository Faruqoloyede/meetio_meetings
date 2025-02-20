import { BsMicMuteFill } from "react-icons/bs";
import { BsSoundwave } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { LuScreenShare } from "react-icons/lu";
import { IoHandLeftOutline } from "react-icons/io5";
import { MdOutlineCallEnd, MdClosedCaptionOff } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { FaVideoSlash } from "react-icons/fa6";


export const users = [
    {
        id:1,
        img: '/user.png',
        name: 'Kamaldeen Iddrisu',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer" />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 2,
        img: '/user.png',
        name: 'Kamaldeen Iddrisu',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"   />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 3,
        img: '/user.png',
        name: 'Kamaldeen Iddrisu',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 4,
        img: '/user.png',
        name: 'Kamaldeen Iddrisu',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 5,
        img: '/user2.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 6,
        img: '/user2.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 7,
        img: '/user2.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 8,
        img: '/user2.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 9,
        img: '/user.png',
        name: 'Chantel Annan',
        icon: <BsSoundwave className="text-2xl text-white bg-[#008080] rounded-full p-1 cursor-pointer" />,
        icon2: <BsMicMuteFill className="text-2xl text-white cursor-pointer" />,
    },
    {
        id: 10,
        img: '/user.png',
        name: 'Chantel Annan',
        icon: <HiOutlineDotsHorizontal className="text-2xl text-white bg-[#008080] rounded-full p-1 cursor-pointer" />,
        icon2: <BsMicMuteFill className="text-2xl text-white cursor-pointer" />,
    },
    {
        id: 11,
        img: '/user.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"  />,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer" />
    },
    {
        id: 12,
        img: '/user.png',
        name: 'Chantel Annan',
        icon: <BsMicMuteFill className="text-2xl text-white cursor-pointer"/>,
        icon2: <FaMicrophoneAlt className="text-2xl text-white cursor-pointer"  />
    }
]

export const participants = [
    {
        name: "John Doe", 
        image: "/user.png"
    },
    {
        name: "John Doe", 
        image: "/user2.png"
    },
    {
        name: "John Doe", 
        image: "/user3.png"
    },
    {
        name: "John Doe", 
        image: "/user4.png"
    },
    {
        name: "John Doe", 
        image: "/user5.png"
    },
]

export const footer = [
    {
        id:1,
        icon: <FaMicrophoneAlt />,
        icon2: <BsMicMuteFill />,
        title: "mute",
        title2: "speaker"
    },
    {
        id: 2,
        icon: <FaVideo />,
        icon2: <FaVideoSlash />,
        title: "stop video",
        title2: "video"
    },
    {
        id: 3,
        icon: <LuScreenShare />,
        title: "share"
    },
    {
        id: 4,
        icon: <IoHandLeftOutline />,
        title: "raise hand"
    },
    {
        id: 5,
        icon: <MdOutlineCallEnd />,
        title: "leave call"
    },
    {
        id: 6,
        icon: <FaRegFaceSmile />,
        title: "stickers"
    },
    {
        id: 7,
        icon: <MdClosedCaptionOff />,
        title: "captions"
    },
    {
        id: 8,
        icon: <IoMdMore />,
        title: "more"
    },
]