import * as yup from 'yup'

export const identityFormSchema = yup.object({
  name: yup.string().min(2).max(32).required('名前を入力してください'),
  email: yup.string().email('正しいメールアドレスを入力してください').required('メールアドレスは必須です'),
  password: yup.string().test(
    'password',
    'パスワードは半角英数字を組み合わせて8~256文字を設定してください',
    value => value ? new RegExp('^[a-zA-Z0-9]{8,256}$').test(value) : false,
  )
    .required('パスワードは必須です'),
})

export type IdentityFormSchema = yup.InferType<typeof identityFormSchema>
