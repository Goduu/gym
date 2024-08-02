"use client"
import { ReactNode } from '@mdx-js/react/lib'
import React, { FC } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    color?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    handleClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, disabled, size, color = "primary", handleClick }) => {

    return (
        <button className={`transition ease-in-out delay-150 hover:scale-105 duration-150 border font-bold hover:shadow-sm rounded-md h-fit p-2 ${size === "small" && "p-[3px] text-xs"} ${disabled && "cursor-default"}  ${color === "primary" && "bg-indigo-500 text-gray-50"} ${className}`} onClick={handleClick}>
            {children}
        </button>
    )
}
