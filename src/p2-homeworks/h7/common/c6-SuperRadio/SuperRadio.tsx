import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {FormControlLabel, Radio} from "@material-ui/core";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <FormControlLabel
            value={o}
            control={<Radio name={name}
                            onChange={onChangeCallback}
                            checked={o === value}
                            value={o}
                            size={"small"}/>}
            label={o}/>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
