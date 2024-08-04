export type CheckTest = {
    id: number,
    call: string,
    expectedResult: any,
    result?: any | undefined
    hidden: boolean
    testRun: boolean
}