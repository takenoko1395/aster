import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Box, Card, Paper, Slider } from '@mui/material'
import { useState, useEffect } from 'react'

export const StandardImageList = () => {
  const [cols, setCols] = useState(3)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // ウィンドウサイズに応じて列数を変更
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < 600) {
        setCols(2) // モバイルの場合
      } else if (window.innerWidth < 900) {
        setCols(3) // タブレットの場合
      } else {
        setCols(4) // デスクトップの場合
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 画像のサイズ計算
  const imageSize = Math.floor(windowWidth / cols) - 20 // 余白を考慮

  return (
    <>
      <Box margin={3} width={600}>
        <Slider
          value={cols}
          onChange={(_, value) => setCols(value as number)}
          min={2}
          max={6}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box margin={3}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <ImageList cols={cols} gap={8}>
            {itemData.map(item => (
              <ImageListItem key={item.img}>
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {
                    <img
                      srcSet={`${item.img}?w=${imageSize}&h=${imageSize}&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=${imageSize}&h=${imageSize}&fit=crop&auto=format`}
                      alt={item.title}
                      // loading="lazy"
                      style={{
                        objectFit: 'cover', // 画像が枠内で切り抜かれずに収まるように調整
                        borderRadius: '8px',
                      }}
                    />
                  }

                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </Box>
    </>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
]

export default StandardImageList
