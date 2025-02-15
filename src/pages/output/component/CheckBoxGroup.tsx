import { useFormContext, Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'
import { InputFormSchema } from '../types'

// チェックボックスのオプションリスト
const checkBoxOptions = [
  { name: 'coding', label: 'Coding' },
  { name: 'music', label: 'Music' },
  { name: 'sports', label: 'Sports' },
]

export const CheckBoxGroup = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()

  return (
    <FormControl error={!!errors.checkBoxes}>
      <FormGroup>
        {checkBoxOptions.map(option => (
          <Controller
            key={option.name}
            name={`checkBoxes.${option.name}` as `checkBoxes.${keyof InputFormSchema['checkBoxes']}`} // 型キャストでエラー回避
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={option.label}
              />
            )}
          />
        ))}
        {/* エラーメッセージ */}
        {errors.checkBoxes && (
          <FormHelperText>{errors.checkBoxes.message || '少なくとも1つは選択してください'}</FormHelperText>
        )}
      </FormGroup>
    </FormControl>
  )
}
