import { Box, Button, Stack } from '@mui/material'
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
        <Box margin={2}>
          <Stack spacing={3} direction="column">
            <ComboBox />
            <CustomRadioGroup />
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
          {/* 結果を表示 */}
          {/* <Box>
            {result && (
              <Stack spacing={2}>
                <Typography variant="h6">入力内容</Typography>
                {Object.entries(result).map(([key, value]) => (
                  <Typography key={key} variant="body1">
                    {`${key}: ${value}`}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box> */}
        </Box>
      </form>
    </FormProvider>
  )
}

export default Page
