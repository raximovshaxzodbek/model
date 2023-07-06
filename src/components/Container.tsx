import React, {HTMLAttributes} from "react";

export default function Container
({
     children, className
} :
{
    children: React.ReactNode,
    className?: string
})
{
    return (
        <div className={"header w-full py-4 " + className}>
            {children}
        </div>
    )
}