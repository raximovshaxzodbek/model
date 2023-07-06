import React from 'react';
import Title from "@/components/Title";
import Container from "@/components/Container";
import {data} from "@/components/Partners/data";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";

const Partners = () => {
    return (
        <Container className={"my-[50px]"}>
            <Title>ПАРТНЕРЫ</Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Navigation]}
                className={"swiper-box mt-[56px]"}
            >
                {data.map(item => {
                    return (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className={"flex flex-col gap-[30px] w-full items-center"}>
                                <div
                                    className={`
                                    w-[275px] 
                                    h-[130px] 
                                    rounded-[30px] 
                                    bg-white 
                                    border 
                                    flex 
                                    justify-center 
                                    items-center 
                                    border-[#ececec]
                                `}
                                >
                                    <Image
                                        src={item.image1}
                                        alt={String(item.id)}
                                    />
                                </div>
                                <div
                                    className={`
                                    w-[275px] 
                                    h-[130px] 
                                    rounded-[30px] 
                                    bg-white 
                                    border 
                                    flex 
                                    justify-center 
                                    items-center 
                                    border-[#ececec]
                                `}
                                >
                                    <Image
                                        src={item.image1}
                                        alt={String(item.id)}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container>
    );
};

export default Partners;