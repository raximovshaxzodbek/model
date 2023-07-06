import React from 'react';
import Container from "@/components/Container";
import Title from "@/components/Title";
import {data} from "@/components/News/data";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Button from "@/components/Button";
import Link from "next/link";
import {IoIosArrowDropright} from "react-icons/io";

const News = () => {
    return (
        <Container className={"mt-[137px]"}>
            <Title>НОВОСТИ</Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Navigation]}
                className={"swiper-box"}
            >
                {data.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className={"news-box px-6 py-1"}>
                                <Image src={item.image} alt={String(item.id)} />
                                <div className={"mt-[140px] flex flex-col gap-3"}>
                                    <h3>{item.title}</h3>
                                    <h4>{item.date}</h4>
                                    <p>{item.text}</p>
                                </div>
                                <Button
                                    className={"btn-sm absolute -bottom-[25px] left-1/2 -translate-x-1/2"}
                                >
                                    Подробнее
                                </Button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className={"flex justify-around"}>
                <Link
                    href={"/"}
                    className={`
                        my-6 
                        flex 
                        gap-2 
                        items-center 
                        text-[#0D4C93] 
                        text-[24px] 
                        font-normal 
                        not-italic
                        duration-300
                        hover:text-[#00C9C9]
                    `}
                >
                    <span>Посмотреть все новости</span>
                    <IoIosArrowDropright />
                </Link>
                <Link
                    href={"/"}
                    className={`
                        my-6 
                        flex 
                        gap-2 
                        items-center 
                        text-[#0D4C93] 
                        text-[24px] 
                        font-normal 
                        not-italic
                        duration-300
                        hover:text-[#00C9C9]
                    `}
                >
                    <span>Подписаться на новости</span>
                    <IoIosArrowDropright />
                </Link>
            </div>
        </Container>
    );
};

export default News;