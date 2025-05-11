import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {scrapeFragrance} from '../services/api.service';
import { cacheFragrance, getCachedFragrance } from '../services/cache.service';
import type { FragranceData } from '../types/fragrance';

const FRAGRANCE_QUERY_KEY = 'fragranceData';

export const useFetchFragrance = (url: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => scrapeFragrance(url),
        onSuccess: (data: FragranceData) => {
            cacheFragrance(data);

            queryClient.setQueryData<FragranceData>([FRAGRANCE_QUERY_KEY], data);
        },
    });
};

export const useFragranceData = () => {
    return useQuery<FragranceData | null>({
        queryKey: [FRAGRANCE_QUERY_KEY],
        queryFn: () => {
            const cachedData = getCachedFragrance();
            if (cachedData) {
                return cachedData
            }
            return null;
        },

        staleTime: Infinity,
    })
}