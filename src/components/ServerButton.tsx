"use client"
import { ReactNode } from '@mdx-js/react/lib'
import React, { FC } from 'react'

type ServerButtonProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    handleClick?: () => Promise<void>
}

/**
 * A button component that triggers a server request when clicked.
 * 
 * @component ServerButton
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.handleClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered ServerButton component.
 */
export const ServerButton: FC<ServerButtonProps> = ({ children, className, disabled, handleClick }) => {

    const handleClicks = () => {
        if (disabled) return
        handleClick?.()
    }

    return (
        <form
            action={handleClicks}
        >
            <button type="submit" className={`border rounded-md h-fit p-2 ${disabled && "cursor-default"} ${className}`}>
                {children}
            </button>
        </form>
    )
}
