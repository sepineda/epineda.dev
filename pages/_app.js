import React from 'react';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Router from 'next/router';
import withGA from 'next-ga';
import { MDXProvider } from '@mdx-js/react';
import { Layout, Nav, Footer, Head } from '../components';
import components from "../components/markdown";

const colors = {
  blue: '#3867d6',
  greys: ['#EEE', '#BBB', '#999', '#666'],
  white: '#FFF',
  black: '#333'
};

const theme = {
  colors: {
    primary: colors.blue,
    text: colors.black,
    background: 'rgb(246, 247, 248)',
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors
  },
  breakpoints: ['850px', '1100px', '64em'],
  fonts: {
    system: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ],
    serif: ['Georgia', 'serif']
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  }
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
  }

  strong {
    font-weight: bold;
  }

  hr {
    margin: 2em 0;
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

const NAV_HEIGHT = 65;

export const DEFAULT_TITLE =
  'Eduardo Pineda (@sepineda) - Full-Stack JavaScript Engineer';
const DEFAULT_DESCRIPTION = 'Passionate Software Developer';
const DEFAULT_IMAGE = '/public/images/social_media.png';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <>
            <Nav />
            <Head
              title={DEFAULT_TITLE}
              description={DEFAULT_DESCRIPTION}
              image={DEFAULT_IMAGE}
            />
            <Layout
              pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
              css={{
                paddingLeft: '8px',
                paddingRight: '8px'
              }}
            >
              <GlobalStyle />
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </>
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default withGA('UA-92490805-11', Router)(MyApp);
