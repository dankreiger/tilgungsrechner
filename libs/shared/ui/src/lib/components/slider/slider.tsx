import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import MuiSlider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { identity } from 'ramda';
import { FC } from 'react';
import { SliderProps } from './internal';

export const Slider: FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  step = 1,
  errorMsg,
  onChange,
  xf = identity,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography id="non-linear-slider" gutterBottom>
        {label}: {xf(value)}
      </Typography>
      <MuiSlider
        value={value}
        min={min}
        step={step}
        max={max}
        scale={xf}
        getAriaValueText={() => String(xf(value))}
        valueLabelFormat={label}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      {errorMsg && (
        <FormHelperText sx={{ color: red[400] }}>{errorMsg}</FormHelperText>
      )}
    </Box>
  );
};
