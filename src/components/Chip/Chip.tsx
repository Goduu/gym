"use client"
import React, { FC } from 'react'

type ChipProps = {
    text: string | number
    color: "red" | "green" | "amber"
    selected?: boolean
    faded?: boolean
    onClick?: () => void
}

export const Chip: FC<ChipProps> = ({ text, color, selected, faded, onClick }) => {

    return (
        <div
            onClick={onClick}
            className={`
                relative inline-block whitespace-nowrap rounded-lg h-fit
                px-2 py-2 sm:px-3.5 
                align-baseline font-sans text-xs font-bold uppercase leading-none text-white
                ${colorClass[color]} ${selected && "border shadow-md "} 
                ${onClick && "cursor-pointer"}
                ${faded && "opacity-80"}
            `}>
            <div >{text}</div>
        </div>
    )

}

const colorClass = {
    red: "bg-red-500",
    green: "bg-green-500",
    amber: "bg-amber-500"
}
