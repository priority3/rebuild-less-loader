import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginReact(),pluginLess()],
  source: {
    alias: {
      '@animate': './node_modules/animate.less/animate.less'
    }
  }
});
