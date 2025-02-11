import { Box, Stack, TextField, Typography } from '@mui/material'
import { FieldValues, Path, useFormContext } from 'react-hook-form'

interface Props<T extends FieldValues> {
  label: string
  field: Path<T>
}

export const CustomTextField = <T extends FieldValues>({ label, field }: Props<T>) => {
  const { register, formState: { errors } } = useFormContext<T>()

  return (
    <Stack direction="row" spacing={2} alignContent="center">
      <Box width={160} alignContent="center" textAlign="left">
        <Typography>{label}</Typography>
      </Box>
      <TextField size="small" {...register(field)} label={label} error={!!errors[field]} helperText={errors[field]?.message as string || ''} fullWidth />
    </Stack>
  )
}
