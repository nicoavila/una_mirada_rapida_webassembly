fn main() {
    println!("Hola Noders!");
}

#[no_mangle]
pub fn sumar(num1: i32, num2: i32) -> i32 {
    return num1 + num2
}