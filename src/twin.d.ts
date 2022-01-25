import 'twin.macro';

import styledImport, { css as cssImport } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
