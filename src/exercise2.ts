//! 1. Definir una interfaz para representar un producto

// ** A. La interfaz debe incluir propiedades para el nombre, el precio y la categoría del producto.
interface Product {
    name: string;
    price: number;
    category: string;
}

//** B. Crear una clase que implemente la interfaz de producto
class ProductImplementation implements Product {
    constructor(public name: string, public price: number, public category: string) {}
}

// ** C. Instanciar un objeto de producto y asignarle valores a sus propiedades
const productOne: Product = new ProductImplementation("Shirt", 20, "Clothing");

//! 2. Diseñar una clase para representar una cuenta bancaria

// ** A. La clase debe tener propiedades para el número de cuenta, el saldo y el nombre del titular
class bankAccount {
    constructor(private accountNumber: string, private balance: number, private owner: string) {}

    // ** B. Definir métodos para depositar, retirar y consultar el saldo de la cuenta
    deposit(quantity: number) {
        this.balance += quantity;
    }

    withdraw(quantity: number) {
        if (quantity <= this.balance) {
            this.balance -= quantity;
        } else {
            console.log("Insufficient balance");
        }
    }

    checkBalance() {
        console.log(`The current balance of ${this.owner}'s account is: ${this.balance}`);
    }
}

// ** C. Crear dos objetos de cuenta bancaria diferentes y realizar operaciones sobre ellos
const accountOne = new bankAccount("123456", 1000, "Richard");
const accountTwo = new bankAccount("987654", 500, "Etham");

accountOne.deposit(200);
accountOne.withdraw(50);
accountOne.checkBalance();

accountTwo.deposit(100);
accountTwo.withdraw(600);
accountTwo.checkBalance();

//! 3. Crear una función que determine si una cadena de caracteres es un palíndromo.

function isPalindrome(word: string): boolean {
    const convertWord  = word.toLowerCase().replace(/\s/g, '');
    const reverseWord = convertWord.split('').reverse().join('');
    return convertWord === reverseWord;
}

console.log(isPalindrome("Rapar")); //? true
console.log(isPalindrome("Anita lava la tina")); //? true
console.log(isPalindrome("Hola mundo")); //? false
