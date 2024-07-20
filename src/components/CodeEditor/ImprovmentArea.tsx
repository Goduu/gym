"use client"
import React, { FC } from 'react'
import { Button } from '../Button'

type ImprovmentAreaProps = {
    pageTitle: string,
}

export const ImprovmentArea: FC<ImprovmentAreaProps> = ({pageTitle}) => {

    const owner = "Goduu"
    const repo = "gym"
    const title = `Improvment idea for ${pageTitle}`
    const body = 
`I have an idea to improve ${pageTitle} \n
- [ ] The answer is incorrect
- [ ] Better answer idea
- [ ] Other`

    const encodedBody = encodeURIComponent(body)
    const baseURL = `https://github.com/${owner}/${repo}/issues/new?title=${title}&body=${encodedBody}`

    const handleClick = () => {
        window.open(baseURL, "_blank")
    }
   

    return (
        <div className="flex flex-col pt-10 gap-4 items-center">
            <div>
                Any improvment idea? Share with us!
            </div>
            <Button handleClick={handleClick}>Improve this exercice</Button>
        </div>
    )
}


