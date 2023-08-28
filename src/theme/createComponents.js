const createComponents = (palette) => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '44px',
          background: palette.secondary.main,
          height: 'fit-content',
          ':hover': {
            background: palette.secondary.dark,
          },
          '& .MuiChip-label': {
            padding: 0,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
          fontFamily: 'Raleway, sans-serif',
          lineHeight: '103%',
        },
      },
    },
  }
}

export default createComponents
