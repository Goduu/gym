"use client"
import React, { FC } from 'react'

type ChipProps = {
    text: string | number
    color: "red" | "green" | "amber"
}

export const Chip: FC<ChipProps> = ({ text, color }) => {

    const bgColor = `bg-${color}-500`

    if (color === "red") {
        return (
            <div className={`relative inline-block whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white`}>
                <div >{text}</div>
            </div>
        )
    }
    if (color === "green") {
        return (
            <div className={`relative inline-block whitespace-nowrap rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white`}>
                <div >{text}</div>
            </div>
        )
    }
    if (color === "amber") {
        return (
            <div className={`relative inline-block whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white`}>
                <div >{text}</div>
            </div>
        )
    }
}
