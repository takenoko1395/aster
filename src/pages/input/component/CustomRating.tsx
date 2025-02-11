import * as React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, FormControlLabel, FormGroup, FormHelperText, Rating, Box } from '@mui/material'
import { InputFormSchema } from '../types'

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export const CustomRating = () => {
  const { control, formState: { errors } } = useFormContext<InputFormSchema>()
  const [value, setValue] = React.useState<number | null>(3)
  const [hover, setHover] = React.useState(-1)

  return (
    <FormControl error={!!errors.checkBoxes}>
      <FormGroup>
        <Controller
          name="rating" // 型キャストでエラー回避
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={(
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                  <Rating
                    {...field}
                    value={value}
                    precision={0.5}
                    max={5}
                    getLabelText={getLabelText}
                    onChange={(_, newValue) => {
                      setValue(newValue)
                      field.onChange(newValue)
                    }}
                    onChangeActive={(_, newHover) => {
                      setHover(newHover)
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </Box>
              )}
              label=""
            />
          )}
        />
        {/* エラーメッセージ */}
        {errors.checkBoxes && (
          <FormHelperText>{errors.checkBoxes.message || '少なくとも1つは選択してください'}</FormHelperText>
        )}
      </FormGroup>
    </FormControl>

  )
}
