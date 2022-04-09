

const initState: boolean = false

export const loadingReducer = (state = initState, action: loadingAC): boolean => {
    switch (action.type) {
        case "SHOW-SPINNER":
        {
            return action.value
        }
        default: return state
    }
}
type loadingAC = ReturnType<typeof loadingAC>
export const loadingAC = (value: boolean) => {
    return  {
        type: 'SHOW-SPINNER',
        value
    } as const
}