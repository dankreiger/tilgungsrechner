import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import MuiSlider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { identity } from 'ramda';
import { FC, forwardRef } from 'react';
import { SliderProps } from './internal';

export const Slider: FC<SliderProps> = forwardRef(
  (
    {
      label,
      min,
      max,
      value,
      step = 1,
      errorMsg,
      onChange,
      defaultValue = 1,
      name,
      xf = identity,
    },
    ref
  ) => {
    return (
      <Box ref={ref} sx={{ width: '100%' }}>
        <Typography id="non-linear-slider" gutterBottom>
          {label}: {xf(value)}
        </Typography>
        <MuiSlider
          value={value}
          defaultValue={defaultValue}
          min={min}
          step={step}
          max={max}
          scale={xf}
          getAriaValueText={() => String(xf(value))}
          valueLabelFormat={label}
          onChange={onChange}
          name={name}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
        {errorMsg && (
          <FormHelperText sx={{ color: red[400] }}>{errorMsg}</FormHelperText>
        )}
      </Box>
    );
  }
);
