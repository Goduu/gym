"use client"
import { ReactNode } from '@mdx-js/react/lib'
import React, { FC } from 'react'

type ButtonProps = {
    children: ReactNode
    handleClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, handleClick }) => {
    return (
        <button className="border rounded-md h-fit p-2" onClick={handleClick}>
            {children}
        </button>
    )
}
