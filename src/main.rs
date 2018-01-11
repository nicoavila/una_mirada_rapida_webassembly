fn main() {
  println!("Hola Noders! Soy un módulo de WebAssembly y me estoy ejecutando!! :D");
}

#[no_mangle]
pub fn sumar(num1: i32, num2: i32) -> i32 {
  return num1 + num2
}