import {StaticImageData} from "next/image";
import ServiceImage1 from "@/assets/images/services/1.png";
import ServiceImage2 from "@/assets/images/services/2.png";
import ServiceImage3 from "@/assets/images/services/3.png";
interface dataType {
    id: number;
    image: StaticImageData;
    title: string;
    text: string;
}

export const data: dataType[] = [
    {
        id: 1,
        image: ServiceImage1,
        title: "СЕРВИС ОБОРУДОВАНИЯ",
        text: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        id: 2,
        image: ServiceImage2,
        title: "РЕГИСТРАЦИИ",
        text: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ...."
    },
    {
        id: 3,
        image: ServiceImage3,
        title: "УСЛУГИ ЛОГИСТИКИ",
        text: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей....."
    },

]