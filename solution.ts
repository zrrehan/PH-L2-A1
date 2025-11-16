function formatValue(input: string | number | boolean) {
    if(typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        return !input;
    }
}

function getLength(input: unknown[] | string) {
    return input.length;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

type BookType = {
    title: string;
    rating: number;
}

function filterByRating(input: BookType[]) {
    return input.filter(singleBook => singleBook.rating >= 4);
}

type UserType = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: UserType[]) {
    return users.filter(singleUser => singleUser.isActive);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(myBook: Book) {
    console.log(`Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? "Yes" : "No"}`);
} 

function getUniqueValues(arr1: string[] | number[], arr2: string[] | number[]) {
    type IndexType = string | number;
    let mergedArr: IndexType[] = arr1;

    for (let value of arr2) {
        if(!mergedArr.includes(value)) {
            mergedArr.push(value);
        }
    }

    return mergedArr;
}

type ProductType = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
function calculateTotalPrice(allProduct: ProductType[]) {
    let totalPrice: number = 0;
    allProduct.map(product => {
        totalPrice += product.price * product.quantity;
        if(product.discount) {
            totalPrice -=  (product.price * product.quantity) * (product.discount * (1/100));
        }
    })
    return totalPrice;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));