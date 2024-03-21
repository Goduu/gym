"use client"
import React, { FC, ReactNode, useRef } from 'react'
export type ResultTooltipProps = {
    children: ReactNode,
    tooltip: string
}
export const ResultTooltip: FC<ResultTooltipProps> = ({ children, tooltip }) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div className="group relative">
            <div className="inline-block group">
                {children}
            </div>
            <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 w-fit">
                <div className="bg-gray-800 text-white text-xs rounded-lg p-2 w-full mb-1">
                    {tooltip}
                </div>
            </div>
        </div>
    )
}
