import { Box, Button, Divider, Stack } from '@mui/material'
import { InputFormSchema, inputFormSchema } from './types'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ComboBox } from './component/ComboBox'
import { CustomRadioGroup } from './component/CustomRadioGroup'
import { CustomSlider } from './component/CustomSlider'
import { CheckBoxGroup } from './component/CheckBoxGroup'
import { CustomRating } from './component/CustomRating'

export const Page = () => {
  const methods = useForm({
    resolver: yupResolver(inputFormSchema),
  })

  // useStateを使わずに値の変更を監視する
  const selectedOption = useWatch({
    control: methods.control, // methodsからcontrolを取得
    name: 'radioOption', // 監視するフィールド名
  })

  const onSubmit = (data: InputFormSchema) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack margin={2} spacing={3} divider={<Divider />}direction="column">
          <ComboBox />
          <CustomRadioGroup />
          <Stack direction="column">
            { selectedOption === 'slider' ? <CustomSlider /> : <></> }
            { selectedOption === 'checkbox' ? <CheckBoxGroup /> : <></> }
            { selectedOption === 'rating' ? <CustomRating /> : <></> }
          </Stack>

          <Box alignContent="right" textAlign="right" marginTop={2}>
            <Button
              type="submit"
              // disabled={!methods.formState.isValid}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </FormProvider>
  )
}

export default Page
