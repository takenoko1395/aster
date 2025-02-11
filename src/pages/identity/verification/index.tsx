import React, { useState, useRef, useEffect } from 'react'
import { TextField, Box, Typography, Button } from '@mui/material'
import { useCognito } from '../../../gateway/api/useCognito'
import { useNavigate } from 'react-router-dom'
import { useIdentity } from '../../../hooks/identity/hooks'
import { AsterError, AsterErrorCode } from '../../../domain/model/core/error'

const VerificationPage = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const { confirm } = useCognito()
  const { email } = useIdentity()
  const navigate = useNavigate()
  const [error, setError] = useState<AsterError>()

  useEffect(() => {
    if (!email) {
      throw new AsterError(AsterErrorCode.UNEXPECTED, `Email is not set`)
    }
  }, [])

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async () => {
    if (email) {
      try {
        await confirm(email, otp.join(''))
        console.log('Verified', otp.join(''))
        void navigate('complete')
      } catch (error) {
        setError(new AsterError(AsterErrorCode.INVALID_ARGUMENT, `Verification failed: ${error as string}`))
      }
    } else {
      setError(new AsterError(AsterErrorCode.UNEXPECTED, `Email is not set`))
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h6">Enter 6-digit OTP</Typography>
      <Box display="flex" gap={1}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            inputRef={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el
            }}
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            variant="outlined"
            size="small"
            inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '1.5rem' } }}
            sx={{ width: '3rem' }}
          />
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={otp.includes('')}>Verify</Button>
    </Box>
  )
}

export default VerificationPage
