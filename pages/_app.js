import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '../stores/index.js';

export const theme = extendTheme({
  styles: {
    global: {
        body: {
            backgroundImage: "linear-gradient(to right, #d1e98f, #a5b870)",
            fontFamily: "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif"
        }
    }
  }
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  )
}
