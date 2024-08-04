import React, { FC } from 'react'
import { ImSpinner } from './Icons'

type LoadingProps = {
    visible: boolean
}

export const Loading: FC<LoadingProps> = ({ visible }) => {

    return (
        <div className={`${!visible && "hidden"} fixed left-0 top-0  h-screen w-screen items-center justify-center backdrop-blur-md bg-slate-500 bg-opacity-10 py-10 z-50`}>
            <div className="flex justify-center items-center h-full">
                <ImSpinner className="h-16 w-16 animate-spin" />
            </div>
        </div>
    )
}
