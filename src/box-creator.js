/**
 * Example of how to use webpack HMR in a module that creates side effects.
 *
 * When this code runs, a <div> is created.
 *
 * To prevent a new <div> from being created every time this module is reloaded,
 * `module.hot.dispose` is used to remove the old <div>.
 */
const sideEffectNode = document.createElement('div');
sideEffectNode.setAttribute('style', 'background-color: lime; padding: 0px; margin: 0px;');
sideEffectNode.textContent = 'adsss';
document.body.appendChild(sideEffectNode);
console.log('ʕ•ᴥ•ʔ Log from box-creator') ;
// Remove the most recently-added <div> so that when the code runs again and
// adds a new <div>, we don't end up with duplicate divs.
if (module.hot) {
  module.hot.dispose(function() {
    sideEffectNode.parentNode.removeChild(sideEffectNode);
  });
}


