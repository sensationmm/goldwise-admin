import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

export const customPalette = createTheme({
  palette: {
    secondary: {
      main: grey[400]
    },
    confirm: {
      main: green[300]
    },
    error: {
      main: red[600]
    },
    text: {
      main: grey[900],
      sub: grey[600],
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
            ...(ownerState.variant === 'contained' && (ownerState.color === 'secondary' || ownerState.color === 'confirm') && {
              color: '#fff',
            }),
            fontWeight: 'bold',
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            border: '1px solid transparent',
            borderRadius: '0px',
            padding: '5px 10px',
            '&:hover': {
              borderColor: customPalette.palette.text.disabled,
              backgroundColor: 'transparent'
            },
            ...(ownerState.variant === 'contained' && {
              borderColor: customPalette.palette.text.disabled,
              '&:hover': {
                backgroundColor: customPalette.palette.text.disabled,
              },
            }),
            '&.Mui-disabled .MuiSvgIcon-root': {
              fill: customPalette.palette.text.disabled,
            },
          })
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
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            minWidth: '600px',
            padding: '70px',
            textAlign: 'center',
            color: customPalette.palette.text.sub
          }
        }
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bold'
          }
        }
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
            marginBottom: '20px',
            width: '100%',
            '> *': {
              width: '100%',
              whiteSpace: 'nowrap'
            },
            '>:not(:first-of-type)': {
              marginLeft: '30px'
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: '20px'
          }
        }
      }
    }
  },
  customPalette
);

export default theme;