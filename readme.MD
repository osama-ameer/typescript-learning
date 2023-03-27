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

## Third CLass

- Tuples: works likes array

## Class

- first we create a class and create a constructor with paramaetes which we want to receive
- make a class object and set values by passing argumenets to the constructor
- readonly keyword: just read cannot be modidied/update
- this keyword: this points to the current object in a method/constructor

## Access Modifiers

- public: default is public we can also write public
- private: this is not accessible outside its class normally, instead we can create a method inside class to update the private variable and by getters and setters

## Typescript

- ```bash
   tsc --init
  ```
- this will create a tsconfig.json file in root from which we we configure our typescript configs
  - lib: kon kon si libs support karni hai. konsa env pe kaam hy
  - target: apka code es mein compile karta hy latst es6,
  - rootDir : kaha sy ts file input leni hy konsy folder sy
  - outputDir: code compile karke js file konsy folder py aegi
  - souecrmap: for debugging runs ts file in console
  - strict: true
- ```bash
  tsc -w
  ```
- -w is watch flag it makes runtime changes to ts file for dev env, we does dot required to run tsc app.ts file again and again for compilation
