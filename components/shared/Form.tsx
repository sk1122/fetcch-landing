import React from "react"

export interface IProps {
    isOpen: boolean
    setIsOpen: Function
}

export const Form = ({ isOpen, setIsOpen }: IProps) => {
    return (
        <div className="w-2/3 h-2/3 rounded-xl bg-[#FFFDE8] flex flex-col justify-center items-start">

        </div>
    )
}