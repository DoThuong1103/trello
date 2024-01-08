import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button, CardActions, CardContent, CardMedia, Typography, Card as MuiCard } from '@mui/material'

function Card() {
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '1px solid rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p:1.5, '&:last-child': { p: 1.5 } }}>
        <Typography
        >Title 1</Typography>
      </CardContent>
      <CardActions sx={{ p: '0px 4px 8px 4px' }}>
        <Button size="small" startIcon={<Group/>}>20</Button>
        <Button size="small" startIcon={<Comment/>}>15</Button>
        <Button size="small" startIcon={<Attachment/>}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
