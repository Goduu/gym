

export const stringifyVariable = (variable: any) => {
    if (variable === undefined) return "undefined"
    return JSON.stringify(variable, null, 2)
}