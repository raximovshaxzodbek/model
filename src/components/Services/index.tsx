import Container from "@/components/Container";
import Title from "@/components/Title";
import {data} from "@/components/Services/data";
import Image from "next/image";
import Button from "@/components/Button";

export const Services = () => {
    return (
        <div className={"flex flex-col gap-4 items-center"}>
            <Title>УСЛУГИ</Title>
            <Container className={"services flex-wrap min-h-[110vh] my-6 flex justify-center items-center gap-[98px]"}>
                {data.map(service => {
                    return (
                        <div
                            key={service.id}
                            className={"relative w-[388px] h-[491px] text-center rounded-[50px] bg-white"}
                        >
                            <div className={"w-full h-[259px] overflow-hidden rounded-[50px]"}>
                                <Image src={service.image} alt={String(service.id)} />
                            </div>
                            <div className={"flex flex-col gap-2"}>
                                <h2 className={`
                                        text-[#0D4C93] 
                                        text-[20px] 
                                        font-medium 
                                        not-italic
                                    `}>
                                    {service.title}
                                </h2>
                                <p className={"text-[16px] font-extralight"}>{service.text}</p>
                            </div>
                            <Button
                                className={`
                                    absolute 
                                    -bottom-[25px] 
                                    left-1/2 
                                    -translate-x-1/2
                                    btn-sm
                                `}
                            >
                                Подробнее
                            </Button>
                        </div>
                    )
                })}
            </Container>
        </div>
    );
};
