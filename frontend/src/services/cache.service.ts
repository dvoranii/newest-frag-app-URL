import type { FragranceData } from "../types/fragrance";

const CACHE_KEY = 'fragranceData';

export const getCachedFragrance = (): FragranceData | null => {
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
};

export const cacheFragrance = (data: FragranceData) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
};