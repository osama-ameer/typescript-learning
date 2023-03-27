## 1st Class

### Install global ts

```bash
npm install -g typescript
```

### Steps

- Create a simple html,css,js boiler plate
- link script app.js
- create app.ts file and write ts code
- after writing code run
  ```bash
  tsc app.ts
  ```
- tsc app.ts will create app.js in the root dir
- Basically, browser does not understand ts
- So, we need to convert our ts file to js and tsc app.ts will do it for us and runs in browswer

### Basic Types

- number 1,2,-3
- string "Osama"
- boolean true, false
- Types of array
  let arr: string[]

## Second Class

### Custom Types

- lets suppose we inititalized an object
- For that object we will define custome types which will include types of every key of that object
- when defining types make sure to use semicolon ";" instead of ','
- ? operator is used to define optional type of any key

```bash
const persons: Person[] = []
```

- In this we have define a variable persons and its type is Person which we have created for of person object and it will be an array

### Function types

- gives types to parameters
- return type ex: void,number
- callback type to paramater

### String Literal

- type Calc = "add" | "subtract"
- in this type '|' is union operator which works as or
