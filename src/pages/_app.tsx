import Header from "@/components/Header";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Box as="main" pt="80px">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
