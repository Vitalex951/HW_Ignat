import React from 'react'
import {Box} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    values: number[]
    setValues: (values: number[]) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {

    const onChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if(typeof value === "object") {
           props.setValues(value)
       }
    }

    function valuetext(value: number) {
        return `${value}°C`;
    }
    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={props.values}
                    onChange={onChangeHandler}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
