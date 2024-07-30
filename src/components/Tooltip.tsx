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
                    className="flex rounded-xl border dark:backdrop-blur-2xl p-1 -pt-10 -pl-10 shadow-lg"
                >
                    {!disabled && text}
                </span>
            </div >
        </div>

    )
}


