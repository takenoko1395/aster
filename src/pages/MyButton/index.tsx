import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  title: string
}

export const MyButton = ({ title }: Props) => {
  const onClick = () => {
    try {
      // ここで何かエラーが発生する可能性がある処理
      if (title === 'I will throw an error on click') {
        throw new Error('An error occurred in MyButton on click!')
      }
      // 通常のクリック処理
      console.log('Button clicked!')
    } catch (error) {
      // エラー処理
      console.error(error)
      // ここでエラー処理を行う
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Material-UI Button Example</h1>
      <Link to="/App">
        <Button onClick={onClick}>
          {title}
        </Button>
      </Link>
    </div>
  )
}
