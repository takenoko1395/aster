import { FormControl, FormLabel, Slider, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { InputFormSchema } from '../types'

export const CustomSlider = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose a number</FormLabel>
        <Controller
          name="slider"
          defaultValue={0}
          control={control}
          rules={{ required: 'Please select a number' }}
          render={({ field }) => (
            <Slider
              {...field}
              min={0}
              max={100}
              step={10}
              valueLabelDisplay="auto"
              marks
              sx={{ width: 300 }}
            />
          )}
        />
        {errors.slider && <Typography color="error">{errors.slider.message}</Typography>}
      </FormControl>
    </>
  )
}
