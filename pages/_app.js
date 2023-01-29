import 'src/styles/globals.scss';
import Layout from 'containers/layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import styling from 'src/config/styling.json';
import Head from 'next/head';
import { ColorModeScript } from '@chakra-ui/react';

const theme = extendTheme(styling);

function MyApp({ Component, pageProps }) {
  const getCustomAside = Component.getCustomAside || (page => page);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript initialColorMod={styling.config.initialColorMode} />
      <Layout>{getCustomAside(<Component {...pageProps} />)}</Layout>
    </ChakraProvider>
  );
}

export default MyApp;
