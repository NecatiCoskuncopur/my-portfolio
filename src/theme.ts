const theme = {
  typography: {
    fontSizes: {
      $1: '12px',
      $2: '14px',
      $3: '15px',
      $4: '16px',
      $5: '18px',
      $6: '20px',
      $7: '22px',
      $8: '24px',
      $9: '28px',
      $10: '32px',
      $11: '36px',
      $12: '40px',
      $13: '44px',
      $14: '48px',
      $15: '52px',
      $16: '56px',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },

  borderRadius: {
    xs: '3px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '16px',
    round: '50%',
  },

  device: {
    wideScreen: '(max-width: 1440px)',
    desktop: '(max-width: 1280px)',
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 640px)',
    mini: '(max-width: 425px)',
  },

  colors: {
    apple: '#44993B',
    alto: '#DDDDDD',
    black: '#000000',
    cinder: '#181715',
    codGray: '#1D1B19',
    gray: '#888888',
    leather: '#987750',
    white: '#FFFFFF',
    smokyBlack: '#0E0E0E',
  },
} as const;

export default theme;
