import { Badge, Box, Button, Drawer, InputAdornment, SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import { Close, HelpOutline, LibraryAdd, NotificationsNone, Search } from '@mui/icons-material'
import Profile from './Menus/Profile'
import { useState } from 'react'

const AppBar = () => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        paddingX: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} onClick={() => setOpen(true)} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: 'white' }}
          />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md:'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{
              color:'white',
              border:'none',
              '&:hover': { border: 'none' } }}
            variant="outlined"
            startIcon={ <LibraryAdd /> }
          >Create</Button>
        </Box>
        <Drawer
          anchor='left'
          open={open}
          sx={{
            width: 240,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box'
            }
          }}
          onClose={handleClose}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={ <LibraryAdd /> }>Create</Button>
        </Drawer>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth: 120,
            maxWidth: 172,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color:'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <Close
                fontSize='small'
                sx={{ color: 'white', cursor: 'pointer', display: searchValue ? 'block' : 'none' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
        />
        <ModeSelect />
        <Tooltip title='Notifications'>
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }} >
            < NotificationsNone sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Help' sx={{ cursor: 'pointer' }}>
          <HelpOutline sx={{ color: 'white' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
