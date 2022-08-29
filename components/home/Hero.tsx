import React, { useState } from "react"
import { Button, Form } from "../shared"

interface IProps {
    isOpen: boolean
    setIsOpen: Function
}

export const Hero = ({ isOpen, setIsOpen }: IProps) => {

    const setFalse = () => {
        if(isOpen) {
            setIsOpen(false)
        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-8" onClick={() => setFalse()}>
            <div className="relative font-bold font-prompt text-white">
                <img src="/images/star.png" className="w-6 h-6 lg:w-12 lg:h-12 absolute -top-5 left-0 2xl:-top-8 2xl:-left-8" />
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-center">Making the most complex part of <br /> <span className="text-[#FDB658]">Web3</span> <span className="text-[#FF5D46]">“Simple”</span></h1>
                <img src="/images/flash-light.png" className="absolute w-6 lg:w-12 h-12 lg:h-20 bottom-0 right-0 md:right-0 2xl:right-1/4" />
                <img src="/images/highlight-line.png" alt="" className="absolute w-10 h-10 lg:w-20 lg:h-20 bottom-0 left-0 lg:left-1/4" />
            </div>
            <p className="font-prompt z-50 font-light text-xl lg:text-2xl w-full lg:w-2/3 text-slate-400">The infra to achieve cross-chain user experience without bridges + faster and cheeper by using diffrent communication infrastructure</p>
            <Button arrow={true} onClick={() => setIsOpen(true)} />
        </div>
    )
}