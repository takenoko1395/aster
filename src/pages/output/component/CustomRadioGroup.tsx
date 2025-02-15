import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { InputFormSchema } from '../types'

export const CustomRadioGroup = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()

  return (
    <>
      <Box mt={2}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose an option</FormLabel>
          <Controller
            name="radioOption"
            defaultValue=""
            control={control}
            rules={{ required: 'Please select an option' }}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel value="slider" control={<Radio />} label="Slider" />
                <FormControlLabel value="checkbox" control={<Radio />} label="Check Box" />
                <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                <FormControlLabel value="unusedOption" control={<Radio />} label="Unused Option" />
              </RadioGroup>
            )}
          />
          {errors.radioOption && <Typography color="error">{errors.radioOption.message}</Typography>}
        </FormControl>
      </Box>
    </>
  )
}
