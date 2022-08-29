import React, { useEffect } from "react"

interface IProps {
    isOpen: boolean
    setIsOpen: Function
}

const inputs = [
    {
        name: "Name",
        placeholder: "Satyam Kulkarni"
    },
    {
        name: "Email",
        placeholder: "satyam@fetcch.xyz"
    },
    {
        name: "Business Type",
        placeholder: "Web3 Wallet"
    },
    {
        name: "Calendly Link",
        placeholder: "https://calendly.com/sk1122/new-frens"
    },
]

export const Form = ({ isOpen, setIsOpen }: IProps) => {

    useEffect(() => {
        console.log(isOpen, "isOpen")
    }, [isOpen])
    
    return (
        <div onClick={() => {}} className={(isOpen ? "" : "hidden ") + "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-2/3 h-[80%] rounded-xl bg-[#FFFDE8] flex justify-center items-center p-10"}>
            <div className="w-1/2 h-full flex flex-col justify-center items-start space-y-8">
                <img src="/images/logo-black.png" alt="" className="w-[123.78px] h-[44.92px]" />
                <h1 className="text-2xl font-bold font-prompt">Get Early Access</h1>
                {inputs.map(input => (
                    <div className="w-full font-prompt flex flex-col justify-start items-start space-y-4">
                        <label htmlFor="" className="text-lg font-bold">{input.name}</label>
                        <input type="text" placeholder={input.placeholder} className="w-full p-3 bg-[#EFEDD8] border-2 border-[#D3D3D3] rounded-xl" />
                    </div>
                ))}
                <div className="w-full p-3 font-prompt text-xl bg-[#FF5D46] rounded-xl text-white cursor-pointer">Submit</div>
            </div>
        </div>
    )
}