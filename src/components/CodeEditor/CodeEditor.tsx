"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useRef } from 'react';
import { CheckTestItem } from './CheckTestItem';
import { useTheme } from "next-themes"
import { Button } from '../Button';
import { Loading } from '../Loading';
import { CodeEditorProps, useCodeEditorHandlers } from './useCodeEditorHandlers';

export function CodeEditor({ activityId, currentUserProgress, initialCode, checkTests = [] }: CodeEditorProps) {
    const { theme } = useTheme()
    const currentTheme = theme === "dark" ? "dark" : "light"

    const editorRef = useRef(null);
    const {
        code,
        tests,
        loading,
        handleExecuteCode,
        handleSaveProgress,
        onChange } = useCodeEditorHandlers({ activityId, currentUserProgress, initialCode, checkTests })



    return (
        <div className='py-4 mb-10'>
            <CodeMirror
                value={code}
                ref={editorRef}
                height="auto"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                theme={currentTheme}
            />
            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h2>Tests</h2>
                    <div className='flex gap-4'>
                        <Button color="secondary" size='small' handleClick={handleSaveProgress}>
                            Save my progress
                        </Button>
                        <Button size='small' handleClick={handleExecuteCode}>
                            Run Tests
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="flex gap-2 text-xl font-bold ">
                        <div className='w-1/2'>Function Call:</div>
                        <div>Expected:</div>
                    </div>
                    {tests.map((test, index) => (
                        <CheckTestItem key={test.id} test={test} />
                    ))}
                </div>
            </div>
            <Loading visible={loading} />
        </div>
    )

};
