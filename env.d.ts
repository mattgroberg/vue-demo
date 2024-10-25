/// <reference types="vite/client" />

declare interface Contact {
    id: number;
    name: string;
    email: string;
}

declare interface User {
    id: number;
    name: string;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

declare interface LoadedContact {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}