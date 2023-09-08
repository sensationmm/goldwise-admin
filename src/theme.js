import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const customPalette = createTheme({
  palette: {
    secondary: {
      main: grey[400]
    },
    text: {
      main: grey[900],
      disabled: grey[400]
    }
  }
})

const theme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' && ownerState.color === 'secondary' && {
              color: '#fff',
            }),
            fontWeight: 'bold',
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&.Mui-disabled .MuiSvgIcon-root': {
              fill: customPalette.palette.text.disabled,
            },
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: customPalette.palette.text.main,
            fontWeight: 'bold'
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: customPalette.palette.text.main,
            fontWeight: 'bold',
            '&.Mui-disabled': {
                color: customPalette.palette.text.disabled,
            },
          },
          filled: {
            fontWeight: 'normal'
          }
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: customPalette.palette.text.main,
            fill: customPalette.palette.text.main,
            '&.Mui-disabled': {
                color: customPalette.palette.text.disabled,
                fill: customPalette.palette.text.disabled,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: customPalette.palette.secondary.main,
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: customPalette.palette.text.main
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: customPalette.palette.text.main,
            '&.Mui-selected': {
              color: customPalette.palette.text.main,
              fontWeight: 'bold'
            },
            borderBottom: `2px solid ${customPalette.palette.secondary.main}`
          }
        }
      }
    }
  },
  customPalette
);

export default theme;