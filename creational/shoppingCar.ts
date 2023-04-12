import { Product } from "./product";


export class ShoppingCar {

    private static instance: ShoppingCar;
    private products: Array<Product> = [];

    private constructor(){}

    public static getInstance(): ShoppingCar{
        if(!ShoppingCar.instance){
            ShoppingCar.instance =  new ShoppingCar();
        }
        return ShoppingCar.instance;
    }

    public add(product: Product): void{
        this.products.push(product)
    }

    public deleteById(id : number): Product[]{
        return this.products = this.products.filter( (product: Product) => product.getId() !== id)
    }

    public getProducts(): Product[] {
        return this.products;
    }

}


