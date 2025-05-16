import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

export const customPalette = createTheme({
  palette: {
    primary: {
      main: '#655cff'
    },
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
            textTransform: 'none'
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            fontWeight: 'bold',
            ...(ownerState.size === 'large') && {
              padding: '20px 40px',
              borderRadius: '80px'
            },
            ...(ownerState.variant === 'outlined') && {
              color: customPalette.palette.text.main,
              borderColor: customPalette.palette.text.main
            }
          }),
          filled: {
            color: '#fff',
            background: customPalette.palette.text.main
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            border: '1px solid transparent',
            borderRadius: '0px',
            padding: '5px 10px',
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
            fontWeight: 'bold',
            '> input:not(.MuiOutlinedInput-input)': {
              boxSizing: 'content-box',
              border: `1px solid ${customPalette.palette.text.disabled}`,
              padding: '16px 14px',
              borderRadius: '5px',
              '&:focus': {
                borderColor: customPalette.palette.primary.main,
                borderWidth: '2px',
                padding: '14px 12px'
              }
            },
            '&.MuiInput-root': {
              margin: 0
            },
            '&:before, &:after': {
              display: 'none'
            }
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '&.searchInput':{
              '.MuiOutlinedInput-notchedOutline': {
                border: 0,
                borderRadius: 0,
                borderBottom: `1px solid ${customPalette.palette.secondary.main}`,
              },
              '.MuiInputBase-input': {
                fontWeight: 'normal',
                fontSize: '14px',
                width: '250px'
              },
              '.MuiInputBase-root': {
                padding: '0 30px'
              },
              '.MuiInputAdornment-root': {
                marginRight: '20px'
              }
            }
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
            '&.highlight.Mui-checked .MuiSvgIcon-root': {
              fill: customPalette.palette.primary.main,
              color: customPalette.palette.primary.main,
            },
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: customPalette.palette.text.main,
            background: '#fff',
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
            }
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
            borderBottom: `2px solid ${customPalette.palette.secondary.main}`,
            textTransform: 'none'
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