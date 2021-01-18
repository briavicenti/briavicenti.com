import React from 'react';
import { css, Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import theme from './theme/theme';
import background from './assets/background.png';
import Home from './components/Home';
import Header from './components/Header';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      <PageWrapper>
        <Header/>
        <Home/>
      </PageWrapper>
    </ThemeProvider>
  );
};

const globalCss = css`
  body {
    font-family: 'Assistant';
    background-image: url(${background});
    background-color: ${theme.colors.sand};
  }
`;

const PageWrapper = styled.div(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${theme.spacings[6]};
    bottom: ${theme.spacings[6]};
    right: ${theme.spacings[6]};
    left: ${theme.spacings[6]};
`,
);

export default App;
