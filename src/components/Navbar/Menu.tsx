import {data} from "@/components/Navbar/data";
import Link from "next/link";

const Menu = () => {
    return (
        <div
            className={`
                md:flex
                hidden
                justify-around
                mt-[40px] 
                w-full 
                min-h-[50px] 
                bg-white 
                rounded-[25px] 
                overflow-hidden
                px-6
            `}
        >
            {data.menuLink.map(item => (
                <div
                    key={item.id}
                    className={`
                        relative
                        h-[50px] 
                        flex 
                        items-center
                        justify-center
                        group
                    `}
                >
                    <div
                        className={`
                            w-[10px] 
                            h-[10px]  
                            top-2
                            right-2
                            rounded-full 
                            bg-[#00c9c9] 
                            absolute 
                            hidden 
                            duration-300 
                            group-hover:block
                        `}
                    ></div>
                    <Link
                        href={item.link}
                        className={"text-[#0D4C93] text-[16px] lg:text-[18px] hover:text-[#00C9C9] duration-300"}
                    >
                        {item.text}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Menu