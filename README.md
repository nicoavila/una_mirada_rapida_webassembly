# Una mirada rápida a WebAssembly

Código y slides para la presentación **Una mirada rápida a WebAssembly**. Este ejemplo está fuertemente inspirado en el post de *Ian J Sikes* [Get Started with Rust, WebAssembly, and Webpack](https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635)

## Introducción :clipboard:
WebAssembly es un nuevo *formato binario ejecutable para la web* y un lenguaje *compilador objetivo*. Desarrollado por la **W3C Community Group** como un estandar abierto agnóstico a los navegadores web, por lo que perfectamente puede embeberse en otras aplicaciones.
Actualmente está soportado por todos los navegadores modernos:

| Chrome 57  | Edge 15  | Firefox 52  | Safari 11  |
|------------|----------|-------------|------------|

## Instalación :computer:
Para este ejemplo necesitamos

* Node v8.9.1
* Webpack v3.10.0
* Rust v1.23.0
* Emscripten v1.3.22

1. Lo primero es instalar todo el tooling necesario para trabajar con WebAssembly. Ir a la página de [Emscripten](http://kripken.github.io/emscripten-site/) e instalar la versión correspondiente al sistema operativo. Recomiendo descargar una versión portable precompilada, ya que nos ahorra muchas horas si lo compilamos manualmente. Luego de instalar emscripten ejecutar ```source ./emsdk_env.sh```

2. Instalar **Rust** con [rustup](https://www.rustup.rs/), una herramienta que nos permite instalar el compilador y sus versiones (stable y nightly).

3. Instalar **cmake** para nuestro sistema operativo. En macOS ```brew install cmake``` 

4. Clonar el proyecto y ejecutar ```npm run compile && npm run serve```

## How it Works :bulb:

TO-DO

## Enlaces y recursos :earth_americas:

TO-DO