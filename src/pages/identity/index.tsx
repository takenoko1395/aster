import { ErrorBoundary } from 'react-error-boundary'
import { Redirect } from '../../components/error/Redirect'
import { Box, Button, Stack } from '@mui/material'
import { IdentityFormSchema, identityFormSchema } from './types'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCognito } from '../../gateway/api/useCognito'
import { CustomTextField } from './components/CustomTextField'
import { useNavigate } from 'react-router-dom'
import { useIdentity } from '../../hooks/identity/hooks'

export const Page = () => {
  const { signUp } = useCognito()
  const navigate = useNavigate()
  const methods = useForm({
    resolver: yupResolver(identityFormSchema),
  })
  const { setEmail } = useIdentity()

  const onSubmit = (data: IdentityFormSchema) => {
    try {
      setEmail(data.email)
      signUp(data.email, data.password, data.name)
      void navigate('verification')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ErrorBoundary
      FallbackComponent={Redirect}
      onReset={() => console.log('Reset!')}
      onError={() => console.log('')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box margin={2}>
            <Stack spacing={3} direction="column">
              <CustomTextField label="名前" field="name" />
              <CustomTextField label="メールアドレス" field="email" />
              <CustomTextField label="パスワード" field="password" />
            </Stack>
            <Box alignContent="right" textAlign="right" marginTop={2}>
              <Button type="submit">
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </ErrorBoundary>
  )
}

export default Page
