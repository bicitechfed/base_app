module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@/components': './src/components',
          '@/pages': './src/pages',
          '@/models': './src/models',
          '@/navigation': './src/navigation',
          '@/services': './src/services',
          '@/utils': './src/utils',
          '@/icons': './src/icons',
          '@/config': './src/config',
          '@/apis': './src/apis',
          '@/assets': './src/assets',
          '@/hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
