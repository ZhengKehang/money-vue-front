import config from './config'

var tool = {};
for (let i in config.tools) {
  let file = config.tools[i];
  Object.defineProperty(tool, i, {
    get() {
      return require('../tools/' + file).default;
    }
  });
}
export default tool
