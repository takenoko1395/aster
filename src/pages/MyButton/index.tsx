import { Button } from '@mui/material'
import { AsterError } from '../../domain/model/core/error'
import { useEffect, useState } from 'react'

type Props = {
  title: string
}

export const MyButton = ({ title }: Props) => {
  const [error, setError] = useState<AsterError>()

  const onClick = () => {
    // ここで何かエラーが発生する可能性がある処理
    if (title === 'I will throw an error on click') {
      setError(
        new AsterError('A123456', 'An error occurred in MyButton on click!'),
      )
    }
    // 通常のクリック処理
    console.log('Button clicked!')
  }

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Material-UI Button Example</h1>
      <Button onClick={onClick}>{title}</Button>
    </div>
  )
}
