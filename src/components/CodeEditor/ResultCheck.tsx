"use client"
import React, { FC } from 'react'
import { CheckTest } from './types'
import { FaRegCircleCheck, FaRegCircleQuestion, FaRegCircleXmark } from '@/components/Icons'
import { stringifyVariable } from './functions'
import { ResultTooltip } from './ResultTooltip'

type ResultCheckProps = {
    test: CheckTest
}

export const ResultCheck: FC<ResultCheckProps> = ({ test }) => {

    const getErrorTooltip = (test: CheckTest) => {
        if (test.hidden) {
            return "?"
        }

        if (typeof test.result === "object" && "message" in test.result) {
            return test.result.message
        }

        return test.result
    }

    const testPassed = (test: CheckTest) => {
        return stringifyVariable(test.result) === stringifyVariable(test.expectedResult)
    }

    return (
        <div>
            {test.testRun ?
                testPassed(test) ?
                    <FaRegCircleCheck className='w-7 text-emerald-700' /> :
                    <div>
                        <ResultTooltip tooltip={getErrorTooltip(test)}>
                            <FaRegCircleXmark className='w-7 text-rose-700' />
                        </ResultTooltip>
                    </div>
                :
                <FaRegCircleQuestion className='w-7 text-gray-700' />
            }
        </div>
    )
}
