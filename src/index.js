import foo from './tool.js';
import './box-creator.js';

console.log('ʕ•ᴥ•ʔ ' + foo)

if (module.hot) {
  module.hot.accept();
}
