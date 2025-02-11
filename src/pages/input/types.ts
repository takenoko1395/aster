import * as yup from 'yup'

export const inputFormSchema = yup.object({
  combo: yup.string()
    .test(
      'combo-valid',
      '1974以降が至高なので選び直してください',
      value => value ? parseInt(value) >= 1974 : false)
    .required('映画を選択してください'),
  // email: yup.string().email('正しいメールアドレスを入力してください').required('メールアドレスは必須です'),
  // password: yup.string().test(
  //   'password',
  //   'パスワードは半角英数字を組み合わせて8~256文字を設定してください',
  //   value => value ? new RegExp('^[a-zA-Z0-9]{8,256}$').test(value) : false,
  // )
  //   .required('パスワードは必須です'),
})

export type InputFormSchema = yup.InferType<typeof inputFormSchema>
