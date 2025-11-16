# What is the use of the keyof keyword in TypeScript? Provide an example.

মনে করি আমার একটা টাইপ আছে `Person`এবং এর ৩ টি property আছে `name` `age` `gender`

```ts
type Person = {
    name: string; 
    age: number;
    gender: "Female" | "Male";
}
```

আরও মনে করি আমার আরেকটা টাইপ আছে `PersonProperty` যেটাতে `name` `age` `gender` `string` আকারে থাকতে পারে

```ts
type PersonProperty = "name" | "age" | "gender";
```

এখন ওপরের কোড লিখা আর নিম্নোক্ত কোড `typeof` দিয়ে লিখা একই জিনিস বুঝায়  

```ts
type PersonProperty = keyof Person;
```

# Provide an example of using union and intersection types in TypeScript

ধরি আমার `user` এর একটি type আছে যা `admin` `guest` `viewer` যেকোনো কিছুর মধ্যে যেকোনো একটা হতে পারে তখন আমরা `union` ব্যবহার করবো 

```ts
type UserType = "admin" | "guest" | "user";
```

এখন ধরি আমার একটা `UserType` আছে এবং `CarType` আছে, আমার এই দুই type  এর সকল property  মিলে একটা টাইপ লাগবে `UserWithCarType` তখন আমরা intersection ব্যবহার করবো

```ts
type UserType = {
    name: string; 
    age: number;
}

type CarType = {
    model: string; 
    color: string; 
}

type UserWithCarType = UserType & CarType
```
এখানে যদি আমরা গভীরে গিয়ে `UserWithCarType` এর type  দেখি তাহলে উহা হবে 

```ts
type UserWithCarType = {
    name: string; 
    age: number;
    model: string; 
    color: string; 
}
```
