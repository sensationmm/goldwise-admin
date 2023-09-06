import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const palette = {
  primary:  '#000',
  secondary:  '#e2e8f0'
}

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[400]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && ownerState.color === 'secondary' && {
            color: '#fff',
          }),
          fontWeight: 'bold'
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: palette.primary,
          fontWeight: 'bold'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.primary,
          fontWeight: 'bold'
        },
        filled: {
          fontWeight: 'normal'
        }
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.primary,
          fill: palette.primary,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: palette.secondary,
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: palette.primary
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: palette.primary,
          '&.Mui-selected': {
            color: palette.primary,
            fontWeight: 'bold'
          },
          borderBottom: `2px solid ${palette.secondary}`
        }
      }
    }
  }
});

export default theme;