/// <reference types="react-scripts" />

interface Person {
    id: string;
    number: number;
    fullName: string;
    address: string;
    phoneNumber: string;
}

interface Page {
    pageNumber: number;
    items: Person[];
}
