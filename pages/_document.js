import { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider } from '@chakra-ui/react';



export default function Document() {

  return (
    <ChakraProvider>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </ChakraProvider>
  )
}
