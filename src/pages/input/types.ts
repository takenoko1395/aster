import * as yup from 'yup'

export const inputFormSchema = yup.object({
  // コンボボックス
  combo: yup.string()
    .test(
      'combo-valid',
      '1974以降が至高なので選び直してください',
      value => value ? parseInt(value) >= 1974 : false)
    .required('映画を選んでください'),
  // ラジオボタン
  radioOption: yup.string().required('ラジオボタンを入力してね').test(
    'radioOption',
    'Unused Option を選択しないでください',
    value => value ? value !== 'unusedOption' : true,
  ),
  // スライダー
  slider: yup.number().when('radioOption', {
    is: 'slider',
    then: schema => schema.min(50, '50以上の値を入力してください'),
    otherwise: schema => schema.optional().transform(() => undefined), // Sliderが選択されていない場合は値を消す
  }).optional(),
  // チェックボックス
  checkBoxes: yup.object({
    coding: yup.boolean().optional(),
    music: yup.boolean().optional(),
    sports: yup.boolean().optional(),
  }).when('radioOption', {
    is: 'checkbox',
    then: schema => schema.test(
      'checkBoxes',
      'At least one checkbox must be checked',
      value => Object.values(value).some(v => v === true),
    ),
    otherwise: schema => schema.optional().transform(() => undefined), // checkboxが選択されていない場合は値を消す
  }).required(),
  // レーティング
  rating: yup.number().when('radioOption', {
    is: 'rating',
    then: schema => schema.required('レーティングを選択してください'),
    otherwise: schema => schema.optional().transform(() => undefined), // ratingが選択されていない場合は値を消す
  }).required(),
})

export type InputFormSchema = yup.InferType<typeof inputFormSchema>
