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
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

type BookType = {
    title: string;
    rating: number;
}

function filterByRating(input: BookType[]) {
    return input.filter(singleBook => {
        if(singleBook.rating > 5) {
            throw new Error("Rating Range Should be 0 to 5");
        }
        return singleBook.rating >= 4 && singleBook.rating <= 5; 
    });
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
    let mergedArr: IndexType[] = [];

    function customIncludes(array: IndexType[], value: IndexType) {
        for (let idxValue of array) {
            if(idxValue === value) {
                return true;
            }
        } 
        return false;
    }

    function customPush(array: IndexType[], value: IndexType) {
        const newArray: IndexType[] = new Array(array.length+1)
        let idx: number = 0;
        for (let singleValue of array) {
            newArray[idx] = singleValue;
            idx += 1
        }
        newArray[idx] = value
        return newArray;
    }

    for (let value of arr1) {
        if(!customIncludes(mergedArr, value)) {
            mergedArr = customPush(mergedArr, value)
        }
    }

    for (let value of arr2) {
        if(!customIncludes(mergedArr, value)) {
            mergedArr = customPush(mergedArr, value)
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
            if(product.discount > 100) {
                throw new Error("Discount range should be 1 to 100");
            } 
            totalPrice -=  (product.price * product.quantity) * (product.discount * (1/100));
        }
    })
    return totalPrice;
}