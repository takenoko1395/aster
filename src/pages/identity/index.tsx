import { ErrorBoundary } from 'react-error-boundary'
import { Redirect } from '../../components/error/Redirect'
import { Button, Stack, TextField } from '@mui/material'
import { IdentityFormSchema, identityFormSchema } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCognito } from '../../gateway/api/useCognito'

export const Page = () => {
  const { signUp } = useCognito()
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(identityFormSchema),
  })

  const onSubmit = (data: IdentityFormSchema) => {
    signUp(data.email, data.password, data.name)
  }

  return (
    <ErrorBoundary
      FallbackComponent={Redirect}
      onReset={() => console.log('Reset!')}
      onError={() => console.log('')}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
          <TextField {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} error={!!errors.password} helperText={errors.password?.message} />
        </Stack>
        <Button onClick={handleSubmit(onSubmit)} type="submit">
          Submit
        </Button>
      </form>
    </ErrorBoundary>
  )
}

export default Page
