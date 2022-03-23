import React from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC())

    expect(initialState[0].name).toBe('Кот')
    expect(initialState[1].name).toBe('Александр')
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
    expect(newState[1].name).toBe('Виктор')
})


test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC())

    expect(initialState[0].name).toBe('Кот')
    expect(initialState[1].name).toBe('Александр')
    expect(newState[5].name).toBe('Александр')
    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe('Коля')

})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))

    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[2].name).toBe('Дмитрий')
    expect(newState.length).toBe(4)
    expect(initialState.length).toBe(6)
})
