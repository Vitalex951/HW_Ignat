import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerType): UserType[] => {
    switch (action.type) {
        case "SORT-UP": {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        }
        case "SORT-DOWN": {
            return [...state].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        }
        case "CHECK": {
            return [...state].filter(el => el.age >= action.payload.age)
        }
        default:
            return state
    }
}
type homeWorkReducerType = sortACType | sortDownACType | check18ACType

type sortACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type check18ACType = ReturnType<typeof checkAC>

export const sortUpAC = () => {
    return {
        type: 'SORT-UP'
    } as const

}
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN'
    } as const
}

export const checkAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: {age}
    } as const
}