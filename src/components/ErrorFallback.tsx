import { Box, Divider, Typography } from '@mui/material'

interface Props {
  error: Error
  resetErrorBoundary: () => void
}

export const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <Box>
      <>エラーが発生しました</>
      <Typography>詳しくはこちら : {error.message}</Typography>
      <Divider />
      <button onClick={resetErrorBoundary}>Try again</button>
    </Box>
  )
}
