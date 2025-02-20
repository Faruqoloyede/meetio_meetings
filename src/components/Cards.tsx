import { users } from "../constants"
import { useState } from "react"

const Cards = () => {
    const [visibleIcons, setVisibleIcons] = useState<{ [key: string]: boolean }>({});

  const toggleIcon = (userId: number) => {
    setVisibleIcons((prev) => ({
      ...prev,
      [userId]: !prev[userId], 
    }));
  };

  return (
    <section className='relative py-6'>
        <div className="mx-auto max-w-[1440px] px-10 max-xl:px-10 max-lg:px-6 max-sm:px-4">
            <div className="grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-2">
            {users.map((user)=>(
                <div className="relative bg-[#7E7E7E] p-6 rounded-[28px]" key={user.id}>
                    <span className="absolute top-5 right-5" onClick={()=>toggleIcon(user.id)}>{visibleIcons[user.id] ? user.icon2 : user.icon}</span>
                    <div className="flex items-center justify-center mt-12">
                        <img src={user.img} alt={user.name} />
                    </div>
                    <div className="flex items-start mt-10">
                        <p className="text-white">{user.name}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Cards