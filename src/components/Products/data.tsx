import {StaticImageData} from "next/image";
import ProductImage1 from "@/assets/images/products/1.png";
import ProductImage2 from "@/assets/images/products/2.png";
import ProductImage3 from "@/assets/images/products/3.png";
import ProductImage4 from "@/assets/images/products/4.png";
import ProductImage5 from "@/assets/images/products/5.png";
import ProductImage6 from "@/assets/images/products/6.png";
interface dataType {
    id: 1
    image: StaticImageData,
    text: string
}[]

export const data = [
    {
        id: 1,
        image: ProductImage1,
        text: "Эндоваскулярная хирургия"
    },
    {
        id: 2,
        image: ProductImage2,
        text: "Лабораторная диагностика"
    },
    {
        id: 3,
        image: ProductImage3,
        text: "Кардиохирургия"
    },
    {
        id: 4,
        image: ProductImage4,
        text: "ДИАБЕТ"
    },
    {
        id: 5,
        image: ProductImage5,
        text: "ЭНДОУРОЛОГИЯ"
    },
    {
        id: 6,
        image: ProductImage6,
        text: "АРИТМОЛОГИЯ"
    }
]