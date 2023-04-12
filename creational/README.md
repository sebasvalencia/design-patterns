

# Patron Singleton 1️⃣

Es un patron creacional que permite tener una sola instancia de la clase.

Nos permite solucionar que tengamos un solo acceso a un recurso compartido. Ex. Conexion BD, NgRx

## How to implement Singleton 🖥️
 1. Make the constructor private
 2. Create a static method calls the private constructor
 3. Create staic instance property
 4. Create validation of the instance
 

## Diagram 

![](/creational/images/diagram.png)

## Pseudocode

![](/creational/images/pscode.png)

# Run 1️⃣ example in JS
```bash
node singletonJS.js
```

# Run 1️⃣ example in TS
```bash
ts-node singletonTS.ts
```


# Second example
![](/creational/images/reto.png)

```js
shoppingCar.ts ▶️ Singleton class
product.ts ▶️ Product class 
appClientSingleton.ts ▶️ main function  
```

**inside of the creational folder run: **
```bash 
ts-node appClientSingleton.ts
```