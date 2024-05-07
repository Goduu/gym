"use client"
import React, { FC } from 'react'
import { CheckTest } from './types'
import { FaRegCircleCheck, FaRegCircleQuestion, FaRegCircleXmark } from '@/components/Icons'
import { stringifyVariable } from './functions'
import { ResultTooltip } from './ResultTooltip'
import { Mdx } from '../MdxComponents'

type ResultCheckProps = {
    test: CheckTest
}

const formatResult = (result: any) => {
    if (typeof result === "object") {
        return JSON.stringify(result)
    }
    return result

}

export const ResultCheck: FC<ResultCheckProps> = ({ test }) => {

    const getErrorTooltip = (test: CheckTest) => {
        if (test.hidden) {
            return "?"
        }

        if (typeof test.result === "object" && "message" in test.result) {
            return test.result.message
        }
        console.log(test.result)
        return formatResult(test.result)
    }

    const testPassed = (test: CheckTest) => {
        return stringifyVariable(test.result) === stringifyVariable(test.expectedResult)
    }

    if (!test.testRun) {
        return (
            <FaRegCircleQuestion className='w-7 text-gray-700' />
        )
    }
    if (testPassed(test)) {
        return <FaRegCircleCheck className='w-7 text-emerald-700' />
    }

    return (
        <ResultTooltip tooltip={getErrorTooltip(test)}>
            <FaRegCircleXmark className='w-7 text-rose-700' />
        </ResultTooltip>

    )
}
