module.exports = {
  makeUrlAbsolute(base, relative) {
    return new URL(relative, base).href;
  },
  parseUrl(url) {
    return new URL(url).host;
  }
};
