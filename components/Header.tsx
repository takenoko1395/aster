import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'

type Props = {
  title: string,
}

const Header = (props: Props) => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography>{props.title} </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header