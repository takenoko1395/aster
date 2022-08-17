// index.jsがエンドポイント
import Header from "../components/Header"
import { Grid } from "@mui/material"

const HomePage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        item1item1item1item1item1item1item1item1item1item1item1item1
      </Grid>
    </Grid>
  )
}

export default HomePage
