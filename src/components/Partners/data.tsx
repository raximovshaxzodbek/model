import {StaticImageData} from "next/image";
import PartnersImage1 from "@/assets/images/partners/1.png";
import PartnersImage2 from "@/assets/images/partners/2.png";
import PartnersImage3 from "@/assets/images/partners/3.png";
import PartnersImage4 from "@/assets/images/partners/4.png";
import PartnersImage5 from "@/assets/images/partners/5.png";
import PartnersImage6 from "@/assets/images/partners/6.png";
import PartnersImage7 from "@/assets/images/partners/7.png";
import PartnersImage8 from "@/assets/images/partners/8.png";
interface DataType {
    id: number
    image1: StaticImageData
    image2: StaticImageData
}

export const data: DataType[] = [
    {
        id: 1,
        image1: PartnersImage1,
        image2: PartnersImage2

    },
    {
        id: 2,
        image1: PartnersImage3,
        image2: PartnersImage4
    },
    {
        id: 3,
        image1: PartnersImage5,
        image2: PartnersImage6
    },
    {
        id: 4,
        image1: PartnersImage7,
        image2: PartnersImage8
    },
    {
        id: 5,
        image1: PartnersImage1,
        image2: PartnersImage2
    },
    {
        id: 6,
        image1: PartnersImage3,
        image2: PartnersImage4
    }
]