import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange
  //     }
  //   }
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }
        )
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.main
          //   }
          // },
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        })
      }
    },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.primary.main
    //     })
    //   }
    // },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme
