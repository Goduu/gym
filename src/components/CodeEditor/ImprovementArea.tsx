"use client"
import React, { FC } from 'react'
import { Button } from '../Button'

type ImprovementAreaProps = {
    pageTitle: string,
}

export const ImprovementArea: FC<ImprovementAreaProps> = ({ pageTitle }) => {

    const owner = "Goduu"
    const repo = "gym"
    const title = `Improvement idea for ${pageTitle}`
    const body =
        `I have an idea to improve ${pageTitle} \n
- [ ] The answer is incorrect
- [ ] Better answer idea
- [ ] Other`

    const encodedBody = encodeURIComponent(body)
    const baseURL = `https://github.com/${owner}/${repo}/issues/new?title=${title}&body=${encodedBody}`

    return (
        <div className="flex flex-col pt-10 gap-4 items-center">
            <div>
                Any improvement idea? Share with us!
            </div>
            <Button >
                <a href={baseURL} target='_blank' className='text-inherit'>
                    Improve this exercise
                </a>
            </Button>
        </div>
    )
}


