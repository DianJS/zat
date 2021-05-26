const { join } = require('path')
const cwd = process.cwd()

const config = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      sourcemap: true,
      format: 'esm',
      file: join(cwd, 'dist/index.esm.js'),
    },
  ],
}

module.exports = config
