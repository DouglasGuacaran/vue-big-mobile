
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-big-mobile/'
      : '/',
  transpileDependencies: ["vuetify"],
};
