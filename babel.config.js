module.exports = {
  presets: [
    // 根据配置的目标浏览器或者运行环境，选择对应的语法包，从而将代码进行转换
    '@babel/preset-env',
    // react语法包，让我们可以使用react Es6 class Component 的写法支持jsx和tsx语法格式
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    // 官方提供的插件plugins 和预设值presets
    '@babel/plugin-transform-runtime',
    [
      // 将ECMAScript modules 转成CommonJS
      '@babel/plugin-transform-modules-commonjs',
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        autoResolveMultipleImports: true,
        filetypes: {
          '.less': { syntax: 'postcss-less' },
        },
      },
    ],
  ],
};
