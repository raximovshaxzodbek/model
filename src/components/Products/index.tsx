import React from 'react';
import Title from "@/components/Title";
import Container from "@/components/Container";
import {data} from "@/components/Products/data";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import {IoIosArrowDropright} from "react-icons/io";

const Products = () => {
    return (
        <Container className={"flex flex-col items-center bg-white mt-[55px]"}>
            <Title>ПРОДУКЦИЯ</Title>
            <div className={"mt-[62px] flex flex-wrap justify-between gap-[55px]"}>
                {data.map(product => {
                    return (
                        <div
                            key={product.id}
                            className={`
                                product
                                w-[413px] 
                                h-[439px] 
                                overflow-auto 
                                rounded-[35px] 
                                bg-[#F8F8F8] 
                                flex 
                                flex-col 
                                gap-3 
                                justify-center 
                                items-center
                                px-10
                                text-center
                            `}
                        >
                            <div className={"w-full h-[200px] flex justify-center items-center"}>
                                <Image src={product.image} alt={String(product.id)} />
                            </div>
                            <h3
                                className={"text-[24px] font-normal not-italic"}
                            >
                                {product.text}
                            </h3>
                            <Button>Посмотреть все</Button>
                        </div>
                    )
                })}
            </div>
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
                <span>Перейти в каталог нашей продукции</span>
                <IoIosArrowDropright />
            </Link>
        </Container>
    );
}

export default Products;