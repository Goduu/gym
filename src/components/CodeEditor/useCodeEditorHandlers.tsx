import { useCallback, useEffect, useState } from "react"
import { CheckTest } from "./types";
import { useUserContext } from "../UserContextWrapper";
import { Activity } from "src/app/api-functions/fetchUserActivity";
import { upsertActivity } from "src/app/api-functions/upsertActivity";

export type CodeEditorProps = {
    activityId: number,
    currentUserProgress?: Activity | null,
    initialCode?: string,
    checkTests: CheckTest[]
}

export const useCodeEditorHandlers = ({ activityId, currentUserProgress, initialCode, checkTests }: CodeEditorProps) => {
    const [code, setCode] = useState(initialCode);
    const [tests, setTests] = useState<CheckTest[]>(checkTests);
    const [loading, setLoading] = useState<boolean>(false)
    const userData = useUserContext()
    const allTestsPassed = tests.every(test => test.expectedResult === test.evalResult)
    const testsPassed = tests.map(test => test.expectedResult === test.evalResult ? test.id : null).filter((item) => item !== null)

    useEffect(() => {
        if (currentUserProgress) {
            setCode(currentUserProgress.code)
            setTests(tests.map((test) => {
                const evalResult = eval(currentUserProgress.code + "; " + test.call)

                return {
                    ...test,
                    evalResult,
                    testRun: true
                }
            }))
        }
    }, [currentUserProgress])


    const onChange = useCallback((val, viewUpdate) => {
        setCode(val);
    }, []);

    const handleExecuteCode = () => {
        setTests(tests.map(test => {
            try {
                const evalResult = eval(code + "; " + test.call)
                return { ...test, evalResult, testRun: true }
            } catch (error) {
                return { ...test, evalResult: error, testRun: true }
            }
        }))
    };

    const handleSaveProgress = async () => {
        if (!code) {
            return
        }

        setLoading(true)

        await upsertActivity({
            userId: userData.id,
            activityId,
            code,
            successfulTests: testsPassed
        })

        setLoading(false)

    }

    return {
        code,
        tests,
        loading,
        allTestsPassed,
        testsPassed,
        onChange,
        handleExecuteCode,
        handleSaveProgress
    }
}