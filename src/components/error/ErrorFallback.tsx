import { Box, Divider, Typography } from '@mui/material'
import { AsterError } from '../../domain/model/core/error'

interface Props {
  error: AsterError
  resetErrorBoundary: () => void
}

export const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <Box>
      <>エラーが発生しました</>
      <Typography>コード : {error.code}</Typography>
      <Divider />
      <Typography>メッセージ : {error.message}</Typography>
      <Divider />
      <Typography>名前 : {error.name}</Typography>
      <Divider />
      <Typography>詳細 : {error.stack}</Typography>
      <Divider />
      <button onClick={resetErrorBoundary}>Try again</button>
    </Box>
  )
}
