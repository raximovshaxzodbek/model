import {data} from "@/components/Navbar/data";
import Image from "next/image";
import {BiSearch, BiSolidChevronDown} from "react-icons/bi";
import React, {MutableRefObject, useRef, useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";

type ShowLanguageProps = (index: number) => void

const TopBar = () => {
    const [language, setLanguage] = useState<number>(0);
    const [search, setSearch] = useState<boolean>(false);

    const languageRef: MutableRefObject<null | HTMLDivElement> = useRef(null);

    const handleShowLanguage: ShowLanguageProps = (index) => {
        languageRef.current?.classList.toggle("active-language-box")
        setLanguage(index)
    }

    return (
        <>
            <div
                 className={
                "fixed z-20 top-0 left-0 py-8 w-full h-screen flex-col items-center justify-start bg-black/60 "
                     + (search ? "flex" : "hidden")
                }
            >
                <div
                    className={`
                        w-[70%] 
                        h-[50px] 
                        pr-3 
                        rounded-[50px] 
                        bg-white 
                        flex 
                        items-center 
                        justify-between
                    `}
                >
                    <input
                        type={"text"}
                        placeholder={data.search.text}
                        className={"pl-3 w-[90%] outline-none rounded-[25px] h-[50px]"}
                    />
                    <BiSearch className={"text-3xl"} />
                </div>
                <div
                    className={"w-full h-[calc(100vh-100px)]"}
                    onClick={() => setSearch(false)}
                ></div>
            </div>
            <div className={"flex md:hidden items-center justify-around"}>
                <Image src={data.logo} alt={"Model"} />
                <GiHamburgerMenu size={30} className={"cursor-pointer"} color={"#0d4c93"} />
            </div>
            <div className={`
                hidden 
                md:flex 
                justify-between 
                flex-wrap
            `}>
                <div className={"flex gap-4 items-center"}>
                    <div className={"flex items-center justify-between w-[233px] h-[50px]"}>
                        <div
                            className={`
                            w-[50px] 
                            h-[50px] 
                            flex 
                            justify-center 
                            items-center 
                            bg-white 
                            text-[#5A5A5A] 
                            text-[16px] 
                            rounded-full
                        `}
                        >
                            <data.location.icon className={"text-[26px] text-[#0d4c93]"} />
                        </div>
                        <div className={"w-[163px]"}>
                            <p className={"text-[16px] text-[#5A5A5A]"}>
                                {data.location.text}
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center justify-between w-[233px] h-[50px] gap-4"}>
                        <div
                            className={`
                            w-[50px] 
                            h-[50px] 
                            flex 
                            justify-center 
                            items-center 
                            text-[#5A5A5A] 
                            text-[16px] 
                            bg-white 
                            rounded-full
                        `}
                        >
                            <data.phones.icon className={"text-[26px] text-[#0d4c93]"} />
                        </div>

                        <div className={"w-[163px] flex flex-col"}>
                            {data.phones.numbers.map((phone: string, index: number) => {
                                return (
                                    <a
                                        href={`tell:` + phone}
                                        key={index}
                                        className={"text-[16px] text-[#5A5A5A] leading-5 tracking-widest"}
                                    >
                                        {phone}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={data.logo} alt={"Model"} />
                </div>
                <div className={"flex items-center gap-[40px]"}>
                    <div
                        onClick={() => setSearch(true)}
                        className={`
                            cursor-pointer 
                            w-[50px] 
                            h-[50px] 
                            flex 
                            justify-center 
                            items-center 
                            bg-white 
                            rounded-full
                        `}
                    >
                        <Image src={data.search.icon} alt={""}  />
                    </div>
                    {data.socialMedia.map(item => (
                        <a
                            href={item.url}
                            target={"_blank"}
                            key={item.id}
                            className={"w-[153px] h-[50px] bg-white flex items-center rounded-[25px] justify-center gap-1"}
                        >
                            <item.icon className={"text-[#0d4c93] text-[25px]"} />
                            <p className={'text-[12px] text-[#0d4c93]'}>{item.text}</p>
                        </a>
                    ))}
                    <div className={"relative"}>
                        <div
                            onClick={() => handleShowLanguage(language)}
                            className={`
                            cursor-pointer 
                            w-[150px] 
                            h-[50px] 
                            rounded-[25px] 
                            flex 
                            bg-white 
                            items-center 
                            justify-start 
                            px-3 
                            py-1 
                            gap-2
                        `}
                        >
                            <Image className={"w-[25px] h-[25px]"} src={data.languages[language].icon} alt={""} />
                            <p className={"text-[#0d4c93] text-[12px]"}>{data.languages[language].lang}</p>
                            <BiSolidChevronDown />
                        </div>
                        <div
                            className={`
                            absolute 
                            bg-gray-200 
                            z-10
                            shadow-md 
                            shadow-gray-200 
                            rounded-[25px] 
                            top-full 
                            hidden 
                            flex-col 
                            gap-1 
                            mt-1
                        `}
                            ref={languageRef}
                        >
                            {data.languages.map((item, index: number) => {
                                if(index !== language) {
                                    return (
                                        <div
                                            onClick={() => handleShowLanguage(index)}
                                            key={item.id}
                                            className={`
                                            cursor-pointer 
                                            w-[150px] 
                                            h-[50px] 
                                            rounded-[25px] 
                                            flex 
                                            bg-white 
                                            items-center 
                                            justify-start 
                                            px-3 
                                            py-1 
                                            gap-2
                                        `}
                                        >
                                            <Image src={item.icon} className={"w-[25px] h-[25px]"} alt={""} />
                                            <p className={"text-[#0d4c93] text-[12px]"}>{item.lang}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar