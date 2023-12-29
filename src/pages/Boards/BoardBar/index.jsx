import { Box } from '@mui/material'

const BoardBar = () => {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display:'flex',
      alignItems: 'center',
      backgroundColor: 'primary.dark'
    }}>
        Board bar
    </Box>
  )
}

export default BoardBar
