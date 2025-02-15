import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { TemporaryDrawer } from './Drawer'

const Header = () => {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const handleNavigate = async (path: string) => {
    await navigate(path)
  }

  return (
    <>
      <TemporaryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <AppBar position="sticky">
        <Toolbar>
          {/* メニューアイコン（スマホ用） */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* ロゴまたはタイトル */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Awesome App
          </Typography>

          {/* ボタン群 */}
          <Box sx={{ display: 'flex' }}>
            <Button
              color="inherit"
              onClick={() => handleNavigate('/input')}
              sx={{ marginRight: 2 }}
            >
              Input Sample
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigate('/output')}
              sx={{ marginRight: 2 }}
            >
              Output Sample
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigate('/identity')}
              sx={{ marginRight: 2 }}
            >
              Identity
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
