import React from "react"
import { siteData } from "../../site.config"

export const Social = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
            {siteData.heroSocial.map(social => (
                <a key={social.name} href={social.link}><img src={social.img} className="cursor-pointer w-6 h-5" /></a>
            ))}
            <span className="text-5xl text-white">&darr;</span>
        </div>
    )
}