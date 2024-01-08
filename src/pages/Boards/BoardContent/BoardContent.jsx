import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

const BoardContent = () => {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      // alignItems: 'center',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      p: '10px 12px',
      '&::-webkit-scrollbar-thumb': {
        m: 2
      }
    }}>
      <ListColumns/>
    </Box>
  )
}

export default BoardContent
