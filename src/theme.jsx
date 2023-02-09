import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },

  colors: {
    brand: {
      primary: "#CCD6F6",
      secondary: "#8892B0",
      tertiary: "#64FFDA",
      accent: "#00b9ff",
      subtle: "#718096",
    },
  },
  components: {
    Container: {
      sizesaa: {
        container: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: ' 1164px',
        },
      },
    },
    Button: {
      sizes: {
        sm: {
          fontSize: 'md'
        }
      },
      variants: {
        "btn-blue": {
          bg: '#00A2DD',
          fontSize: 'md',
          color: '#fff',
          _hover: {
            backgroundColor: "#008FC9"
          },
          _active: {
            backgroundColor: "#0081BA"
          }
        },
        "btn-green": {
          bg: '#2EAD4B',
          fontSize: 'md',
          color: '#fff',
          _hover: {
            backgroundColor: " #069939"
          },
          _active: {
            backgroundColor: " #008B2B"
          }
        },
      },
    }
  }
});


 