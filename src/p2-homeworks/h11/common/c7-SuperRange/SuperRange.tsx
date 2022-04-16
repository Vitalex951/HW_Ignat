import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Grid, Slider} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    values: number[]
    setValues: (value: number[]) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        setValues,
        values,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (event: any, newValue: number | number[]) => {

        if (typeof newValue === "number") {
            setValues([newValue, values[1]])
        }
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <div className={s.range}>
            <Box sx={{width: 300}}>
                <Slider value={values[0]}
                        onChange={onChangeCallback}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        color="secondary"/>
            </Box>
        </div>
    )
}

export default SuperRange
