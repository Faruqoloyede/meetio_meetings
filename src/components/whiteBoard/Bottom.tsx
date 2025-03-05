import b1 from "../../../public/b1.png";
import b2 from "../../../public/b2.png";
import b3 from "../../../public/b3.png";
import b4 from "../../../public/b4.png";
import b5 from "../../../public/b5.png";

const Bottom = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="flex items-center gap-5 bg-[#008080] p-2 cursor-pointer rounded-md">
            <img src={b1} alt="b1" />
          <div className="flex">
          <img src={b2} alt="b2" />
            <img src={b3} alt="b3" />
            <img src={b4} alt="b4" />
            <img src={b5} alt="b5" />
          </div>
        </div>
    </div>
  )
}

export default Bottom