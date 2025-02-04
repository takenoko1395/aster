import * as yup from 'yup'

export const identityFormSchema = yup.object({
  name: yup.string().required('名前を入力してください'),
  email: yup.string().email('正しいメールアドレスを入力してください').required('メールアドレスは必須です'),
  password: yup.string().min(6, 'パスワードは6文字以上必要です').required('パスワードは必須です'),
})

export type IdentityFormSchema = yup.InferType<typeof identityFormSchema>
