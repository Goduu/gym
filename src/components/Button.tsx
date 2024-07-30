"use client"
import { ReactNode } from '@mdx-js/react/lib'
import React, { FC } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    handleClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, disabled, handleClick }) => {

    return (
        <button className={`border rounded-md h-fit p-2 ${disabled && "cursor-default"}  ${className}`} onClick={handleClick}>
            {children}
        </button>
    )
}
