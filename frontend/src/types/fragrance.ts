// /src/types/fragrance.ts

// Define the Accord interface separately
export interface Accord {
    name: string;
    width: string;
    background: string;
    color: string;
}

// Define the Note interface for reuse
export interface Note {
    name: string;
    image: string;
}

// Define the Notes structure
export interface Notes {
    top: Note[];
    middle?: Note[];
    base?: Note[];
}

// Define the Perfumer interface
export interface Perfumer {
    name: string;
    image: string;
}

// Define the Rating interface
export interface Rating {
    value: number;
    count: number;
}

// Now update the main FragranceData interface
export interface FragranceData {
    name: string;
    brand: string;
    image: string;
    gender?: "men" | "women" | "unisex" | null;
    rating?: Rating;
    accords?: Accord[];
    brandLogo?: string;
    notes?: Notes;
    perfumers?: Perfumer[];
}