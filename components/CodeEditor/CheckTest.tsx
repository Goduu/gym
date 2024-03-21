import React, { FC } from 'react'
import { CheckTest } from './types'
import { ResultCheck } from './ResultCheck'

export type CheckTestItemProps = {
  test: CheckTest
}

export const CheckTestItem: FC<CheckTestItemProps> = ({ test }) => {
  const hiddenTest = test.hidden

  return (
    <div className="flex justify-between">
      <code>{hiddenTest ? "Hidden Test" : test.call}</code>
      <div>Expected: {hiddenTest ? "?" : test.expectedResult}</div>
      <ResultCheck test={test} />
    </div>
  )
}
