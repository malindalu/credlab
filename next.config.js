module.exports = {
     // output: 'export',
     webpack(config) {
          config.module.rules.push({
               test: /\.svg$/i,
               issuer: /\.[jt]sx?$/,
               use: ['@svgr/webpack'],
          })

          return config
     },
     // images: {
     //      unoptimized: true,
     // },
     // distDir: '../../2024-lab-website/',
}