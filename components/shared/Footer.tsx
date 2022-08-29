import React from "react"
import { siteData } from "../../site.config"
import { Button } from "./Button"

export const Footer = () => {
    return (
        <div className="w-full z-50 h-full bg-[#FFFDE8] flex flex-col justify-center items-center p-5">
            <img src="/images/logo-black.png" alt="" className="w-[212px] h-[77.78px]" />
            <Button invert={true} />
            <div className="w-full flex justify-center items-center space-x-20 mt-10">
                {siteData.socials.map(social => (
                    <a key={social.name} href={social.link} target="_blank">
                        <img src={social.img} className={(social.dark ? "" : "invert ") + "w-6 h-6"} alt="" />
                    </a>
                ))}
            </div>
            <h1 className="font-prompt font-light text-md mt-10">©2022 • Fetcch • All Rights Reserved</h1>
        </div>
    )
}