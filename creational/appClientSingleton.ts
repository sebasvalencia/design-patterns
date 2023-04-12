import { Product } from "./product";
import { ShoppingCar } from "./shoppingCar";



function appClientSingleton() {
    const shoppingCar = ShoppingCar.getInstance();

    const newProduct1 = new Product(1, 'Product001', 123);
    const newProduct2 = new Product(2, 'Product002', 123);

    shoppingCar.add(newProduct1);
    shoppingCar.add(newProduct2);

    console.log(` Get all products after add some proucts :> ${ JSON.stringify(shoppingCar.getProducts(), null, 2)} `);

    shoppingCar.deleteById(1);

    console.log(` Get all products after delete one :> ${JSON.stringify(shoppingCar.getProducts(), null, 2) }`);

}


appClientSingleton();