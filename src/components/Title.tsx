import React, {ReactNode} from "react";

interface TitleProps {
    children: ReactNode
}

const Title: React.FC<TitleProps> = ({children}) => {
    return (
        <h1 className={"text-center text-[#0D4C93] text-[24px] not-italic font-medium"}>
            {children}
        </h1>
    )
}

export default Title