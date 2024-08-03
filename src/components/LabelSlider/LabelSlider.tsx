import React, { FC } from 'react'
import { Chip } from '../Chip/Chip'

type LabelSliderProps = {
    rating: number
    text: string
    chipColor: "red" | "amber" | "green"
}

export const LabelSlider: FC<LabelSliderProps> = ({ rating, text, chipColor }) => {
    return (
        <div className="group relative flex cursor-pointer after:shadow-lg after:shadow-black text-sm font-semibold">
            <div className="flex items-center gap-2">
                <div className="border p-2 flex items-center gap-2 transition-all w-16 delay-100 rounded-xl duration-1000 group-hover:w-44">
                    <Chip text={rating} color={chipColor} />
                </div>
                <p className="absolute left-14 transition-all opacity-0 delay-100 duration-700 group-hover:left-[4.5rem] group-hover:opacity-100">{text}</p>
            </div>
        </div>
    )
}
