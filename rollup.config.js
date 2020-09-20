import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/main.ts',
    output: [
      {
        file: 'public/js/bundle.js',
        format: 'iife',
        name: 'viz'
      },
    ],
    // external: [
    //  ...Object.keys(pkg.dependencies || {}),
    //  ...Object.keys(pkg.peerDependencies || {}),
    //],
    plugins: [
        typescript({
          typescript: require('typescript'),
        }),
      ],
    }