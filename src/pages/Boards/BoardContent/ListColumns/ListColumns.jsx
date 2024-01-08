import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import { NoteAdd } from '@mui/icons-material'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display:'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        justifyContent: 'start',
        gap: 2
      }}
    >
      <Column/>
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          height: 'fit-content',
          borderRadius: '6px',
          bgcolor: '#ffffff3d'

        }}
      >
        <Button
          startIcon={
            <NoteAdd />
          }
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >Add new column </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
