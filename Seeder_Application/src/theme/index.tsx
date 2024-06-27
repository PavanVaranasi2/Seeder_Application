import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties & {
      textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
    };
  }

  // Allows the use of the custom variants in the theme configuration
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption?: React.CSSProperties;
    button?: React.CSSProperties & {
      textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
    };
  }

  // Extending the existing Palette interface
  interface TypeBackground {
    default: string;
    paper: string;
    evaluation0: string;
    evaluation1: string;
    evaluation2: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    highEmphasis: string;
    mediumEmphasis: string;
    lowEmphasis: string;
  }

  // Palette Start
  interface Palette {
    primary: PaletteColor;
    background: TypeBackground;
    text: TypeText;
    divider: string;
    structural: PaletteStructural;
    Borders: PaletteBorders;
    Icon: PaletteIcon;
  }

  // Detailed interfaces for each custom property
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
  }

  interface PaletteColorOptions {
    main?: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    purple?: {
      500?: string;
      400?: string;
      600?: string;
    };
    white?: {
      500?: string;
    };
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

// Extend the TypographyProps to include the custom variants
declare module "@mui/material/Typography" {
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

// Define custom typography
const typography = {
  fontFamily: '"Gilroy", "Helvetica", "Arial", sans-serif',

  // Title
  title: {
    fontSize: "36px", // 36px
    fontWeight: 700, // Bold
    lineHeight: "42px",
    letterSpacing: "-0.015em",
  },

  // Heading 2
  heading2: {
    fontSize: "24px", // 24px
    fontWeight: 600, // Bold
    lineHeight: "29.4px",
    letterSpacing: "-0.005em",
  },

  // Heading 3
  heading3: {
    fontSize: "18px", // 18px
    fontWeight: 500, // Medium
    lineHeight: "27px",
  },

  // Body 1
  body1: {
    fontSize: "16px", // 16px
    fontWeight: 500, // Medium
    lineHeight: "22.4px",
  },

  // Body 2
  body2: {
    fontSize: "14px", // 14px
    fontWeight: 600, // Semibold
    lineHeight: "17.15px",
    letterSpacing: "0.01em",
  },

  // Caption
  caption: {
    fontSize: "12px", // 12px
    fontWeight: 500, // Medium
    lineHeight: "14.56px",
    letterSpacing: "0.02em",
  },

  // Button
  button: {
    fontSize: "16px", // 16px
    fontWeight: 600, // Semibold
    lineHeight: "19px",
    textTransform: "none" as "none", // Ensures buttons do not transform text to uppercase
  },
};

// Define custom palette
const palette = {
  primary: {
    main: "#6C5DD3",
    light: "#B4A9FF",
    dark: "#393552",
    contrastText: "#E8E8E9",
    purple: {
      500: "#6C5DD3",
      400: "#B4A9FF",
      600: "#393552",
    },
    white: {
      500: "#E8E8E9",
    },
  },
  text: {
    primary: "#fff",
    secondary: "#f22",
    disabled: "#000",
    highEmphasis: "#E8E7F0", // text/high emphasis
    mediumEmphasis: "#C9C8CC", // text/medium emp
    lowEmphasis: "#A5A5A6", // text/low emp
  },
  background: {
    paper: "#fff",
    default: "#000",
    elevation0: "#19181C", // background/elevation 0
    elevation1: "#201F24", // background/elevation 1
    elevation2: "#2D2D30", // background/elevation 2
  },
  divider: "#393552", // divider color
  structural: {
    background: "#19181C", // Structural Colors/Backgrounds
    grey: {
      100: "#262529", // Structural Colors/greys
    },
  },
  Borders: {
    highEmphasis: "#413F4D", // Borders/high emp
    lowEmphasis: "#28272B", // Borders/low emp
  },
  Icon: {
    highEmphasis: "#D4D2DE", // Icon/high emp
    lowEmphasis: "#727080", // Icon/low emp
  },
};

// Define the theme
const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],

  typography,
  palette,

  components: {
    // Customize MUI Button component styles
    MuiButton: {
      styleOverrides: {
        root: {
          // You can add general styles that apply to all buttons here
          fontSize: "16px",
          lineHeight: "19px",
          textAlign: "center",
          borderRadius: "12px",
          color: palette.primary.white["500"],
        },
        sizeSmall: {
          // Styles for small buttons
          padding: "6px 12px",
        },
        sizeLarge: {
          // Styles for large buttons
          padding: "20px 40px",
        },
        containedPrimary: {
          backgroundColor: palette.primary.purple["500"], // Purple Primary Button
          padding: "12px 24px",
        },
        containedSecondary: {
          backgroundColor: palette.primary.white["500"], // White Primary Button
          color: "#201F24",
          padding: "12px 24px",
        },
        outlined: {
          borderColor: "#E8E8E9", // Outlined Button
          color: "#E8E8E9",
          border: "1px solid #E8E8E9",
          padding: "12px 24px",
        },
        text: {
          color: "#B4A9FF", // Text Button
          padding: "4px 12px",
          fontWeight: "600",
        },
      },
    },
    // Customize other components as needed
  },
});

export default theme;
