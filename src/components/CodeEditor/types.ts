export type CheckTest = {
    id: number,
    call: string,
    expectedResult: any,
    evalResult?: any | undefined
    hidden: boolean
    testRun: boolean
}