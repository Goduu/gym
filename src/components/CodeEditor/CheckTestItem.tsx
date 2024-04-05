import React, { FC } from 'react'
import { CheckTest } from './types'
import { ResultCheck } from './ResultCheck'
import { stringifyVariable } from './functions'

export type CheckTestItemProps = {
  test: CheckTest
}

export const CheckTestItem: FC<CheckTestItemProps> = ({ test }) => {
  const hiddenTest = test.hidden

  return (
    <div className="flex justify-between gap-2">
      <code className='w-1/2 truncate'>{hiddenTest ? "Hidden Test" : test.call}</code>
      <div>Expected: {hiddenTest ? "?" : stringifyVariable(test.expectedResult)}</div>
      <ResultCheck test={test} />
    </div>
  )
}
