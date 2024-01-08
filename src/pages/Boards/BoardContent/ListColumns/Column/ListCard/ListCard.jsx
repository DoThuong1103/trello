import { Box } from '@mui/material'
import Card from './Card/Card'

function ListCard() {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      p: '0 5px',
      m: '0 5px',
      // overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
            ${theme.trelloCustom.boardContentHeight} - 
            ${theme.trelloCustom.columnHeaderHeight} - 
            ${theme.trelloCustom.columnFooterHeight} - 
            ${theme.spacing(5)})`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
    }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  )
}

export default ListCard
