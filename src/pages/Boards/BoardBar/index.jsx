import {
  AddToDrive,
  Bolt,
  Dashboard,
  FilterList,
  PersonAdd,
  VpnLock
} from '@mui/icons-material'
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Tooltip
} from '@mui/material'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  },
  '.MuiChip-label': {
    paddingTop: '2px'
  }
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto ',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        borderBottom: '1px solid #00bfa5',
        paddingX: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<Dashboard />}
          label="Dashboard"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLock />}
          label="Public/Private Workspace"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDrive />}
          label="Add To Google Drive"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<Bolt />}
          label="Automation"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterList />}
          label="Filters"
          // clickable
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={ <PersonAdd /> }
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          sx={{
            // gap: '8px',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: 16,
              color: 'white',
              border: 'none'
            }
          }}
          max={3}
        >
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/314955638_1322938771810376_1917966031877426655_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=110&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeEFP0W8YZXl_dutjDPBVVSiVDKdjplNn_dUMp2OmU2f9y6EMn6MhWFA5YCKV2nACnDeWmUqbo-2li4EqLckd1D4&_nc_ohc=bTMrX_xRBFAAX_67HhD&_nc_ht=scontent.fhan20-1.fna&oh=00_AfC5q37aMlEnvamVwnOlfZDG92hwWt7MSU98RSRMkT1upw&oe=65946057"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/314955638_1322938771810376_1917966031877426655_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=110&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeEFP0W8YZXl_dutjDPBVVSiVDKdjplNn_dUMp2OmU2f9y6EMn6MhWFA5YCKV2nACnDeWmUqbo-2li4EqLckd1D4&_nc_ohc=bTMrX_xRBFAAX_67HhD&_nc_ht=scontent.fhan20-1.fna&oh=00_AfC5q37aMlEnvamVwnOlfZDG92hwWt7MSU98RSRMkT1upw&oe=65946057"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/314955638_1322938771810376_1917966031877426655_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=110&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeEFP0W8YZXl_dutjDPBVVSiVDKdjplNn_dUMp2OmU2f9y6EMn6MhWFA5YCKV2nACnDeWmUqbo-2li4EqLckd1D4&_nc_ohc=bTMrX_xRBFAAX_67HhD&_nc_ht=scontent.fhan20-1.fna&oh=00_AfC5q37aMlEnvamVwnOlfZDG92hwWt7MSU98RSRMkT1upw&oe=65946057"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/314955638_1322938771810376_1917966031877426655_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=110&ccb=1-7&_nc_sid=4da83f&_nc_eui2=AeEFP0W8YZXl_dutjDPBVVSiVDKdjplNn_dUMp2OmU2f9y6EMn6MhWFA5YCKV2nACnDeWmUqbo-2li4EqLckd1D4&_nc_ohc=bTMrX_xRBFAAX_67HhD&_nc_ht=scontent.fhan20-1.fna&oh=00_AfC5q37aMlEnvamVwnOlfZDG92hwWt7MSU98RSRMkT1upw&oe=65946057"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
