import { users } from "../constants"


const Cards = () => {
  return (
    <section className='relative py-6'>
        <div className="mx-auto max-w-[1440px] px-10 max-xl:px-10 max-lg:px-6 max-sm:px-4">
            <div className="grid grid-cols-4 gap-5">
            {users.map((user)=>(
                <div className="relative bg-[#7E7E7E] p-6 rounded-[28px]">
                    <span className="absolute top-5 right-5">{user.icon}</span>
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