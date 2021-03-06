// const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withVideos = require('next-videos');

module.exports = 
withVideos(
withCss(
  withImages(
    withFonts(
    (
  { 
  api: {
    externalResolver: true,
  },
    webpack(config) 
    {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000000
          }
        }
      },
      )
      return config
    },
    
  }
)))))