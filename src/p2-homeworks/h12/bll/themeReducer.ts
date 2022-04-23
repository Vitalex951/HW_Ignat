export type themeStateType = 'JS' | 'React' | 'Deff'

const initState: themeStateType = "JS"

export const themeReducer = (state: themeStateType = initState, action: actionType): themeStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
         return   action.theme
        }
        default:
            return state;
    }
};


type actionType = ReturnType<typeof changeThemeJS>

export const changeThemeJS = (theme: themeStateType) => {
    return {
        type: 'CHANGE-THEME',
        theme
    } as const
};