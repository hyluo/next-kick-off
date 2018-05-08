const withManifest = require('next-manifest')

module.exports = withManifest({
    manifest: {
        icons: {
            src: './res/icon-512*512.png'
        }
    }
})