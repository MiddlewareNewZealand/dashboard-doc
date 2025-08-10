import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
  },
  palette: {
    primary: {
      main: '#7f7f7f',
    },
    secondary: {
      main: '#AD0016',
    },
    tertiary: {
      main: '#191919',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f0f2f5',
    },
  },

  listHeader: {
    background: '#f6f7f9',
  },

  sidebar: {
    background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
  },

  topbar: {
    background: 'linear-gradient(195deg, #8A0012, #AD0016)',

  },

  props: {
    MuiButton: {
      disableElevation: true,
    },
  },

  overrides: {
    MuiCard: {
      root: {
        borderRadius: 0,
      },
    },

    MuiList: {
      root: {
        backgroundColor: '#f0f2f5',
      },
    },
    MuiListSubheader: {
      root: {
        lineHeight: '36px',
      },
    },
    MuiTabs: {
      indicator: {
        height: 4,
      },
    },
    MuiTab: {
      root: {
        minWidth: 116,
      },
    },
    MuiExpansionPanel: {
      root: {
        borderRadius: 0,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
      },
    },

    MuiButton: {
      root: {
        color: '#fff',
        borderRadius: 0,
        '&:hover': {
          color: '#AD0016',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
  },
});

export default theme;
