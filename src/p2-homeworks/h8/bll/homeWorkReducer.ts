import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerType): UserType[] => {
    switch (action.type) {
        case "SORT-UP": {
            return [...state].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        }
        case "SORT-DOWN": {
            return [...state].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        }
        case "CHECK18": {
            return [...state].filter(el => el.age >=18)
        }
        default:
            return state
    }
}
type homeWorkReducerType = sortACType | sortDownACType | check18ACType

type sortACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type check18ACType = ReturnType<typeof check18AC>

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

export const check18AC = () => {
    return {
        type: 'CHECK18'
    } as const
}