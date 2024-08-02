import { FC, ReactNode } from 'react'

type TooltipProps = {
    children: ReactNode,
    text: string,
    disabled?: boolean
}

export const Tooltip: FC<TooltipProps> = ({ children, text, disabled }) => {

    return (
        <div className={!disabled ? "group" : ""}>
            {children}
            <div className={`
                    opacity-0 group-hover:opacity-100 group-hover:z-50 
                    flex absolute justify-center
                    transition duration-150 delay-150 ease-in-out`}>
                <span
                    className="text-gray-800 bg-gray-200 font-bold p-1 mt-1 rounded transition-colors duration-300"
                >
                    {!disabled && text}
                </span>
            </div >
        </div>

    )
}


