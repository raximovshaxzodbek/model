import {StaticImageData} from "next/image";
import NewsImage1 from "@/assets/images/news/1.png";
interface DataType {
    id: number
    image: StaticImageData
    title: string
    date: string
    text: string
}

export const data: DataType[] = [
    {
        id: 1,
        image: NewsImage1,
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        date: "26.07.2021",
        text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        id: 2,
        image: NewsImage1,
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        date: "26.07.2021",
        text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        id: 3,
        image: NewsImage1,
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        date: "26.07.2021",
        text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        id: 4,
        image: NewsImage1,
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        date: "26.07.2021",
        text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        id: 5,
        image: NewsImage1,
        title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        date: "26.07.2021",
        text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    }
]