export interface FragranceData {
    name: string;
    brand: string;
    image: string;
    gender?: "men" | "women" | "unisex" | null;
    rating?: {
        value: number;
        count: number;
    };
    accords?: {
        name: string;
        width: string;
        background: string;
        color: string;
    }[];
    brandLogo?: string;
    notes?: {
        top: { name: string; image: string }[];
        middle: { name: string; image: string }[];
        base: { name: string; image: string }[];
    };
    perfumers?: { name: string; image: string }[];
}