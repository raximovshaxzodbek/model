import {data} from "@/components/Main/data";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Button from "@/components/Button";

export default function Main() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full swiper-box"
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={"w-full flex-col-reverse flex md:flex-row items-center justify-between"}>
                            <div className={"w-full md:w-1/2 flex flex-col gap-3"}>
                                <h3 className={"lg:text-[50px] md:text-[30px] text-[22px] text-[#0D4C93] font-normal"}>{item.title}</h3>
                                <p className={"lg:text-[24px] md:text-[18px] text-[16px] text-[#363535]"}>{item.text}</p>
                                <Button>Подробнее</Button>
                            </div>
                            <div className={"w-full md:w-1/2 relative"}>
                                <Image src={item.image} className={"relative z-10"} alt={item.title} />
                                <div className={"absolute ellipse"}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}