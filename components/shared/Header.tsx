import React from "react"
import Image from "next/image"

export const Header = () => {
    return (
        <div className="absolute w-full flex justify-between items-center space-x-4 py-4 px-4 sm:px-6 lg:px-20 m-10">
            <div className="w-full flex justify-start items-center">
                <Image src="/images/logo-white.png" width={139} height={51} />
            </div>
            <div className="w-full flex justify-end items-center text-white font-prompt">
                <h1 className="text-2xl font-bold">About</h1>
            </div>
        </div>
    )
}