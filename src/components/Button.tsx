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

// USing a form instead of a onClick for the button allows to pass some server function to the handleClick
export const Button: FC<ButtonProps> = ({ children, className, disabled, size, color = "primary", handleClick }) => {

    const handleClicks = () => {
        if (disabled) return
        handleClick?.()
    }

    return (
        <form action={handleClicks}>
            <button type="submit"
                className={`
                    transition ease-in-out delay-150 hover:scale-105 duration-150 border  
                    font-bold hover:shadow-sm rounded-md h-fit p-2
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "bg-indigo-500 text-gray-50"}
                    disabled:scale-100 disabled:bg-slate-500
                    ${className}
                `}
                disabled={disabled}
                onClick={handleClick}>
                {children}
            </button>
        </form>
    )
}