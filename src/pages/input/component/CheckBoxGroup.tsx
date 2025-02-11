import { useFormContext, Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'
import { InputFormSchema } from '../types'

export const CheckBoxGroup = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()

  return (
    <FormControl error={!!errors.checkBoxes}>
      <FormGroup>
        <Controller
          name="checkBoxes.coding"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Coding"
            />
          )}
        />
        <Controller
          name="checkBoxes.music"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Music"
            />
          )}
        />
        <Controller
          name="checkBoxes.sports"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Sports"
            />
          )}
        />
      </FormGroup>
    </FormControl>
  )
}
