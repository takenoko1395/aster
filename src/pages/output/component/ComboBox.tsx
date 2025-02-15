import { Autocomplete, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { InputFormSchema } from '../types'

export const ComboBox = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()
  const top100Films = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994 },
    { id: 2, title: 'The Godfather', year: 1972 },
    { id: 3, title: 'The Godfather: Part II', year: 1974 },
    { id: 4, title: 'The Dark Knight', year: 2008 },
    { id: 5, title: '12 Angry men', year: 1957 },
  ]

  return (
    // テキストフィールドみたいに直接FormContextを渡せるコンポーネントは少ない
    // その場合はControllerでラップすると良い感じ
    <Controller
      name="combo"
      control={control}
      rules={{ required: 'Please select a movie' }}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={option => option.title} // 表示用のラベル
          isOptionEqualToValue={(option, value) => option.title === value.title} // 選択状態を正しく判定
          onChange={(_, newValue) => field.onChange(newValue ? newValue.year : '')} // `id` のみを保存
          sx={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label="Movie"
              error={!!errors.combo}
              helperText={errors.combo ? errors.combo.message : ''}
            />
          )}
        />
      )}
    />
  )
}
