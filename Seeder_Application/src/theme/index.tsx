import { createTheme } from '@mui/material/styles';
import '@mui/material/styles';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';

declare module '@mui/material/styles' {
  interface CustomColors {
    railTrack: string;
    dueChip: string;
  }
  interface CustomPalette {
    customColors: {
      railTrack: string;
      dueChip: string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface TypographyVariants {
    title: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties & {
      textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    };
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption?: React.CSSProperties;
    button?: React.CSSProperties & {
      textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    };
  }

  interface TypeBackground {
    default: string;
    paper: string;
    elevation0: string;
    elevation1: string;
    elevation2: string;
  }

  interface Partial<TypeBackground> {
    default?: string;
    paper?: string;
    elevation0?: string;
    elevation1?: string;
    elevation2?: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    highEmphasis: string;
    mediumEmphasis: string;
    lowEmphasis: string;
  }

  interface Palette {
    primary: PaletteColor;
    background: TypeBackground;
    text: TypeText;
    divider: string;
    structural: PaletteStructural;
    Borders: PaletteBorders;
    Icon: PaletteIcon;
    customColors: CustomColors;
  }

  interface PaletteColor {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
    purple: {
      500: string;
      400: string;
      600: string;
    };
    white: {
      500: string;
    };
    customColor: CustomColors;
  }

  interface PaletteStructural {
    background: string;
    grey: {
      100: string;
    };
  }

  interface PaletteStructuralOptions {
    background?: string;
    grey?: {
      100?: string;
    };
  }

  interface PaletteBorders {
    highEmphasis: string;
    lowEmphasis: string;
  }

  interface PaletteBordersOptions {
    highEmphasis?: string;
    lowEmphasis?: string;
  }

  interface PaletteIcon {
    highEmphasis: string;
    lowEmphasis: string;
  }

  interface PaletteIconOptions {
    highEmphasis?: string;
    lowEmphasis?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    heading2: true;
    heading3: true;
    body1: true;
    body2: true;
    caption: true;
    button: true;
  }
}

const typography = {
  fontFamily: '"Gilroy", "Helvetica", "Arial", sans-serif',

  title: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '42px',
    letterSpacing: '-0.015em',
  },

  heading2: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '29.4px',
    letterSpacing: '-0.005em',
  },

  heading3: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '27px',
  },

  body1: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22.4px',
  },

  body2: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '17.15px',
    letterSpacing: '0.01em',
  },

  caption: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '14.56px',
    letterSpacing: '0.02em',
  },

  button: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '19px',
    textTransform: 'none' as 'none',
  },
};

const palette = {
  primary: {
    main: '#6C5DD3',
    light: '#B4A9FF',
    dark: '#393552',
    contrastText: '#E8E8E9',
    purple: {
      500: '#6C5DD3',
      400: '#B4A9FF',
      600: '#393552',
    },
    white: {
      500: '#E8E8E9',
    },
  },
  text: {
    primary: '#fff',
    secondary: '#f22',
    disabled: '#000',
    highEmphasis: '#E8E7F0',
    mediumEmphasis: '#C9C8CC',
    lowEmphasis: '#A5A5A6',
  },
  background: {
    paper: '#fff',
    default: '#000',
    elevation0: '#19181C',
    elevation1: '#201F24',
    elevation2: '#2D2D30',
  },
  divider: '#393552',
  structural: {
    background: '#19181C',
    grey: {
      100: '#262529',
    },
  },
  Borders: {
    highEmphasis: '#413F4D',
    lowEmphasis: '#28272B',
  },
  Icon: {
    highEmphasis: '#D4D2DE',
    lowEmphasis: '#727080',
  },
  customColors: {
    railTrack: '#3A3A3D',
    dueChip: '#E39AB2',
  },
};

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40],

  typography,
  palette,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          lineHeight: '19px',
          textAlign: 'center',
          borderRadius: '12px',
          color: palette.primary.white['500'],
        },
        sizeSmall: {
          padding: '6px 12px',
        },
        sizeLarge: {
          padding: '20px 40px',
        },
        containedPrimary: {
          backgroundColor: palette.primary.purple['500'],
          padding: '12px 24px',
        },
        containedSecondary: {
          backgroundColor: palette.primary.white['500'],
          color: '#201F24',
          padding: '12px 24px',
        },
        outlined: {
          borderColor: palette.primary.purple['500'],
          color: '#C9C8CC',
          padding: '12px 24px',
        },
        text: {
          color: '#B4A9FF',
          padding: '4px 12px',
          fontWeight: '600',
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderWidth: '0px',
          borderStyle: 'none',
          borderColor: 'transparent',
          '--DataGrid-rowBorderColor': 'transparent',
          background: palette.structural.background,
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: palette.primary.purple['600'],
          },
          '& .MuiDataGrid-row': {
            alignItems: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          },
          '& .MuiDataGrid-overlay': {
            backgroundColor: 'transparent',
            color: 'transparent',
          },
          '& .MuiDataGrid-root': {
            borderWidth: '0px',
          },
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderRadius: '17px 17px 0 0',
            background: palette.structural.grey['100'],
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            background: palette.structural.grey['100'],
          },
          '& .super-app-theme--cell': {
            padding: '10px',
            display: 'grid',
            placeItems: 'center',
          },
          '& .super-app-theme--header': {
            background: palette.structural.grey['100'],
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            height: '8px',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
            background: palette.structural.background,
            height: '15px',
            borderRadius: '4px',
            padding: '4px 3px',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
            backgroundColor: palette.Icon.lowEmphasis,
            borderRadius: '20px',
            height: '8px',
          },
          '& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-root .MuiDataGrid-cell:focus':
            {
              outline: 'none !important',
            },
          '& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none !important',
          },
          '& .MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none !important',
          },
        },
      },
    },
  },
});

export default theme;
