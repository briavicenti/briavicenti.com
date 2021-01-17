import React from 'react';
import { css, Global, ThemeProvider, withTheme } from '@emotion/react';

import theme from './theme/theme';
import background from './assets/background.png';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalWithTheme styles={globalCss} />
      <div>HELLO</div>
    </ThemeProvider>
  );
};

const GlobalWithTheme = withTheme(Global);

const globalCss = css`
  body {
    font-family: 'Assistant';
    background-image: url(${background});
    background-color: ${theme.colors.sand};
  }
`;

export default App;
