import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';

export default defineConfig({
  plugins: [pluginReact(),pluginLess(),pluginTypedCSSModules()],
  output: {
    cssModules: {
      exportLocalsConvention: 'camelCase',
      auto: (name) => !/(global.(le|sc|sa)ss|\.css)$/.test(name),
      localIdentName: '[local]-[hash:6]',
    }
  },
  source: {
    alias: {
      '@animate/': './node_modules/animate.less/animate.less'
    }
  }
});
