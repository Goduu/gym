"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { FC, useCallback, useRef, useState } from 'react';
import { CheckTest } from './types';
import { CheckTestItem } from './CheckTestItem';
import { useTheme } from "next-themes"


export type CodeEditorProps = {
    initialCode?: string,
    height?: string,
    checkTests: CheckTest[]
}

export const CodeEditor: FC<CodeEditorProps> = ({ initialCode, height = "auto", checkTests = [] }) => {
    const [code, setCode] = useState(initialCode);
    const [tests, setTests] = useState<CheckTest[]>(checkTests);
    const editorRef = useRef(null);
    const { theme } = useTheme()
    const darkLightTheme = theme === "dark" ? "dark" : "light"


    const onChange = useCallback((val, viewUpdate) => {
        setCode(val);
    }, []);

    const handleExecuteCode = () => {
        setTests(tests.map(test => {
            try {
                const result = eval(code + "; " + test.call)
                return { ...test, result, testRun: true }
            } catch (error) {
                return { ...test, result: error, testRun: true }
            }
        }))
    };

    return (
        <div className='py-4 mb-10'>
            <CodeMirror value={code} ref={editorRef} height={height} extensions={[javascript({ jsx: true })]} onChange={onChange} theme={darkLightTheme} />
            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h2>
                        Tests
                    </h2>
                    <button className="border rounded-md h-fit p-2" onClick={handleExecuteCode}>Execute Tests</button>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        tests.map((test, index) => {
                            return (
                                <CheckTestItem key={index} test={test} />)
                        })
                    }
                </div>
            </div>

        </div>
    )

};
