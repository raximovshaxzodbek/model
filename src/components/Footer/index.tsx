import Container from "@/components/Container";
import {IoLocationSharp} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import Link from "next/link";
import {BiSolidPhoneCall} from "react-icons/bi";
import Button from "@/components/Button";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <Container className={"footer min-h-[400px]"}>
                <footer className={"w-full py-[50px]"}>
                    <div className={"flex gap-8"}>
                        <div className={"md:w-1/2 w-full"}>
                            <div className={"flex gap-[50px] items-start"}>
                                <Link href={"/"} className={"text-[#595959] text-[26px] font-medium"}>Контакты</Link>
                                <div className={"flex flex-col gap-[40px]"}>
                                    <div className={"flex gap-[20px] items-center"}>
                                        <div className={"w-[50px] h-[50px] bg-white flex justify-center items-center rounded-[25px]"}>
                                            <IoLocationSharp size={23} color={"#0D4C93"} />
                                        </div>
                                        <Link href={"/"} className={"text-[16px] text-[#5a5a5a] font-normal"}>
                                            г.Ташкент, Чиланзар <br />
                                            10 квартал, дом 3/1
                                        </Link>
                                    </div>
                                    <div className={"flex gap-[20px] items-center"}>
                                        <div className={"w-[50px] h-[50px] bg-white flex justify-center items-center rounded-[25px]"}>
                                            <MdEmail size={23} color={"#0D4C93"} />
                                        </div>
                                        <a href={"mailto:info@medol.uz"} className={"text-[16px] text-[#5a5a5a] font-normal"}>
                                            info@medol.uz
                                        </a>
                                    </div>
                                </div>
                                <div className={"flex flex-col gap-[40px]"}>
                                    <div className={"flex gap-[20px] items-center"}>
                                        <div className={"w-[50px] h-[50px] bg-white flex justify-center items-center rounded-[25px]"}>
                                            <BiSolidPhoneCall size={23} color={"#0D4C93"} />
                                        </div>
                                        <div className={"flex flex-col gap-2"}>
                                            <a href={"tel:+998712766253"} className={"text-[16px] text-[#5a5a5a] font-normal"}>
                                                +998 71 276-62-53
                                            </a>
                                            <a href={"tel:+998712766254"} className={"text-[16px] text-[#5a5a5a] font-normal"}>
                                                +998 71 276-62-54
                                            </a>
                                        </div>
                                    </div>
                                    <div className={"flex gap-[20px] items-center"}>
                                        <Button className={"btn-sm"}>
                                            Оставить заявку
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex items-center gap-8 h-[200px]"}>
                                <Image src={require("@/assets/images/logo.png")} alt={"logo"} />
                                <p>
                                    Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
                                </p>
                            </div>
                        </div>

                        <div className={"md:w-1/2 w-full flex gap-[20px]"}>
                            <div>
                                <h2 className={"text-[26px] text-[#595959] font-medium"}>О компании</h2>
                                <div className={"flex flex-col gap-2"}>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        История
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Партнеры
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Вакансии
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h2 className={"text-[26px] text-[#595959] font-medium"}>Продукция</h2>
                                <div className={"flex flex-col gap-2"}>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Эндоваскулярная хирургия
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Аритмология
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Кардиохирургия
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Лабораторная диагностика
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Хирургия
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Эндоурология
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Нейрохирургия
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Анестезиология и реанимация
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Диабет
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h2 className={"text-[26px] text-[#595959] font-medium"}>Услуги</h2>
                                <div className={"flex flex-col gap-2"}>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Сервис
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Регистрации
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className={"duration-300 hover:text-[#00C9C9] hover:underline hover:underline-[#00C9C9]"}
                                    >
                                        Услуги логистики
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex justify-between"}>
                        <p>© 2023 ООО «Medical Online Services»</p>
                        <p className={"flex gap-2"}>
                            <span>Дизайн сделан:</span>
                            <a
                                href={"mailto:damingues92@gmail.com"}
                                className={"text-[#00C9C9]"}
                            >
                                damingues92@gmail.com
                            </a>
                        </p>
                    </div>
                </footer>
            </Container>
        </>
    )
}

export default Footer