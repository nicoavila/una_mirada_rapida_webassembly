const wasm = require('./main.rs');

module.exports = {
  sumar: function(num1, num2) {
    return wasm.initialize({noExitRuntime: true}).then(module => {
      let sumar = module.cwrap('sumar', 'number', ['number', 'number']);
      return sumar(parseInt(num1), parseInt(num2));
    });
  }
}