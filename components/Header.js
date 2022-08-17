import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'

// type Props = {
//   title: string,
// }

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>pageProps.title</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header