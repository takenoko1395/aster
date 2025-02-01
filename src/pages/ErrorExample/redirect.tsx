import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AsterError } from '../../domain/model/core/error'

interface Props {
  error: AsterError
  resetErrorBoundary: () => void
}

export const Redirect = ({ error, resetErrorBoundary }: Props) => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Redirectしたよ')
    // 3秒後に遷移
    const timer = setTimeout(() => {
      resetErrorBoundary()
      navigate('/button') // /app に遷移
    }, 3000)

    // クリーンアップ処理（コンポーネントがアンマウントされた場合にタイマーをクリア）
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Typography variant="h6" color="error">
        Something went wrong: {error.message}
      </Typography>
      <Button onClick={resetErrorBoundary} color="primary">
        Try again
      </Button>
    </div>
  )
}
