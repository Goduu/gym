"use client"
import { ReactNode } from '@mdx-js/react/lib'
import React, { FC } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    ping?: boolean
    color?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    handleClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, disabled, ping = false, size, color = "primary", handleClick }) => {

    const handleClicks = () => {
        if (disabled) return
        handleClick?.()
    }

    return (
        <form action={handleClicks}>
            <button type="submit"
                className={`
                    relative
                    transition ease-in-out delay-150 hover:scale-105 duration-150 border  
                    font-bold hover:shadow-sm rounded-md h-fit p-2
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "bg-indigo-500 text-gray-50"}
                    disabled:scale-100 disabled:bg-slate-500
                    ${className}
                    `}
                disabled={disabled}
                onClick={handleClick}>
                <Ping ping={ping} />
                {children}
            </button>
        </form>
    )
}

const Ping: FC<{ ping: boolean }> = ({ ping }) => {
    return (
        <div className='absolute -right-1 -top-1'>
            <span className={`${ping ? "opacity-100" : "opacity-0"} relative flex h-3 w-3`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full border dark:bg-slate-50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-slate-50 "></span>
            </span>
        </div>
    )
}