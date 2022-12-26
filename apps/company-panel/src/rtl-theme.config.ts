import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

export const rtlTheme = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
