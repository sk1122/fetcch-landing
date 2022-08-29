import React, { MouseEventHandler } from "react"

export interface IProps {
    onClick: MouseEventHandler<any>
    arrow: boolean
    invert: boolean
}

export const Button = ({ onClick, arrow = false, invert = false }: IProps) => {
    return (
        <div onClick={onClick} className="w-full flex justify-center items-center">
            <div className={(invert ? "border-black " : "border-white ") + "relative cursor-pointer py-4 px-8 mt-10 rounded-3xl font-prompt flex justify-center items-center bg-[#FDB658] border-8"}>
                <img src="/images/round-line.png" className={(invert ? "invert " : "") + "absolute -bottom-5 -left-5"} alt="" />
                Induct yourself
                {arrow && <img src="/images/arrow.png" alt="" className="absolute -right-40 -top-16" />}
            </div>
        </div>
    )
}