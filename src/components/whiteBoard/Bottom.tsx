import b1 from "../../../public/b1.png";
import b2 from "../../../public/b2.png";
import b3 from "../../../public/b3.png";
import b4 from "../../../public/b4.png";
import b5 from "../../../public/b5.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBold, FaAlignCenter, FaItalic } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { useState } from "react";

const Bottom = () => {
    const [count, setCount] = useState(65)

    const increment = ()=>{
        setCount((prev)=> prev +1)
    }
    const decrement = ()=>{
        setCount((prev)=> prev - 1)
    }
  return (
    <div className="flex items-center justify-center gap-20 mb-3">
        <div className="flex items-center gap-5 bg-[#008080] p-2 cursor-pointer rounded-md">
            <img src={b1} alt="b1" />
          <div className="flex">
          <img src={b2} alt="b2" />
            <img src={b3} alt="b3" />
            <img src={b4} alt="b4" />
            <img src={b5} alt="b5" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 bg-[#008080] p-2 cursor-pointer rounded-md h-12">
            <div className="flex items-center">
                <p className="flex items-center">
                <span className="text-white text-sm">poppins</span>
                <RiArrowDropDownLine className="text-white" />
                </p>
                <p className="flex items-center">
                <span className="text-white text-sm">14</span>
                <RiArrowDropDownLine className="text-white" />
                </p>
            </div>
            <div className="flex items-center gap-5 text-white">
                <FaBold />
                <FaItalic />
                <FaAlignCenter />
                <FaLink />
            </div>
        </div>
        <div className="flex items-center gap-10 p-2 bg-white shadow-lg">
            <button onClick={decrement} className="text-[28px] font-bold cursor-pointer">-</button>
            <span className="text-sm">{count}%</span>
            <button onClick={increment} className="text-[28px] font-bold cursor-pointer">+</button>
        </div>
    </div>
  )
}

export default Bottom