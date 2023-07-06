import Logo from "@/assets/images/logo.png";
import SearchIcon from "@/assets/images/search-icon.svg";
import {BiLogoFacebook, BiSolidPhoneCall} from "react-icons/bi";
import Russian from "@/assets/images/languages/russia.png";
import English from "@/assets/images/languages/english.png";
import Uzbek from "@/assets/images/languages/uzbekistan.png";
import {IoLocationSharp} from "react-icons/io5";
import {IconType} from "react-icons";
import {ImageProps, StaticImageData} from "next/image";

interface dataType {
    logo: StaticImageData
    location: {
        icon: IconType
        text: string
    }
    phones: {
        icon: IconType
        numbers: string[]
    }
    search: {
        icon: string
        text: string
    }
    socialMedia: {
        id: number
        icon: IconType
        text: string
        url: string
    }[]
    languages: {
        id: number,
        lang: string,
        icon: StaticImageData
    }[]
    menuLink: {
        id: number,
        text: string,
        link: string
    }[]

}

export const data: dataType = {
    logo: Logo,
    location: {
        icon: IoLocationSharp,
        text: `г.Ташкент, Чиланзар 10 квартал, дом 3/1`
    },
    phones: {
        icon: BiSolidPhoneCall,
        numbers: [
            '+998 71 276-62-53',
            '+998 71 276-62-54'
        ]
    },
    search: {
        icon: SearchIcon,
        text: "Search Product Name..."
    },
    socialMedia: [
        {
            id: 1,
            icon: BiLogoFacebook,
            text: "Мы на Facebook",
            url: ""
        }
    ],
    languages: [
        {
            id: 1,
            lang: "Русский",
            icon: Russian
        },
        {
            id: 2,
            lang: "Английский",
            icon: English
        },
        {
            id: 3,
            lang: "Узбекский",
            icon: Uzbek
        }
    ],
    menuLink: [
        {
            id: 1,
            text: 'МАГАЗИН',
            link: '/shop'
        },
        {
            id: 2,
            text: 'О КОМПАНИИ',
            link: '/about-company'
        },
        {
            id: 3,
            text: 'ПРОДУКЦИЯ',
            link: '/Products'
        },
        {
            id: 4,
            text: 'УСЛУГИ',
            link: '/services'
        },
        {
            id: 5,
            text: 'АКЦИИ И НОВОСТИ' as string,
            link: '/promotions-news'
        },
        {
            id: 6,
            text: 'ОБРАТНАЯ СВЯЗЬ' as string,
            link: '/feedback'
        }
    ]
}