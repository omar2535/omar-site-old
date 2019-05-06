module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/index' }
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/omar-site' : '',
};