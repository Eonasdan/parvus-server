const typescript = require('@rollup/plugin-typescript');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/server.js',
                format: 'cjs',
                name: 'eonasdan',
                sourcemap: true,
            }
        ],
        plugins: [
            typescript()
        ],
        external: [
            'fs',
            'path',
            'http',
            'jsdom',
            'socket.io'
        ]
    }
];
