import React, { FC } from 'react'
import { CheckTest } from './types'
import { FaRegCircleCheck, FaRegCircleQuestion, FaRegCircleXmark } from '@/components/Icons'
import { stringifyVariable } from './functions'
import { Tooltip } from '../Tooltip'

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

        if (typeof test.evalResult === "object" && "message" in test.evalResult) {
            return test.evalResult.message
        }
        return formatResult(test.evalResult)
    }

    const testPassed = (test: CheckTest) => {
        return stringifyVariable(test.expectedResult) === stringifyVariable(test.evalResult)
    }

    if (!test.testRun) {
        return (
            <Tooltip text={"Run test"}>
                <FaRegCircleQuestion className='w-7 text-gray-700' />
            </Tooltip>
        )
    }
    if (testPassed(test)) {
        return <FaRegCircleCheck className='w-7 text-emerald-700' />
    }

    return (
        <Tooltip text={getErrorTooltip(test)}>
            <FaRegCircleXmark className='w-7 text-rose-700' />
        </Tooltip>

    )
}
