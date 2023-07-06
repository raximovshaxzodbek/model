import React, {CSSProperties, ReactNode} from "react";
interface ButtonProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
}
const Button: React.FC<ButtonProps> = ({children, className, style}) => {
    return (
        <button className={"w-[270px] h-[70px] btn " + className} style={style}>{children}</button>
    )
}

export default Button