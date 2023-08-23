import {createTheme} from "@mui/material/styles";

let theme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiMenu: {
      getContentAnchorEl: null,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      transformOrigin: { vertical: 'top', horizontal: 'left' },
    },
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        width: 'auto',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '28px',
        fontSize: '17px',
        color: '#223eab',
      },
    },
  },
  palette: {
    background: {
      default: '#F5DFBB',
      dark: '#222',
    },
    primary: {
      main: '#223eab',
      light: '#e7efff',
    },
    demo: {
      background: '#0a0a0a',
    },
    controls: {
      background: 'rgba(255,255,255, 0.3)',
      hover: 'rgba(255,255,255, 0.5)',
      focus: 'rgba(255,255,255, 0.6)',
      selected: 'rgba(255,255,255, 0.8)',
      hoverSelected: 'white',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '21px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '17px',
      fontWeight: 400,
      color: '#1d1d1f',
    },
  },
})


export default theme
