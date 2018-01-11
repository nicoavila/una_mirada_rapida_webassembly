const wasm = require('./main.rs')

wasm.initialize({noExitRuntime: true}).then(module => {
  
  const sumar = module.cwrap('sumar', 'number', ['number', 'number'])
  
  console.log('Llamando las funciones de RUST desde JS <3')
  console.log(sumar(1, 2))
})