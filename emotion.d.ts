import '@emotion/react';

import theme from './theme/theme';

type ThemeInterface = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeInterface {}
}
