const BASE_URL = 'http://localhost:3001';

export const scrapeFragrance = async (url: string) => {
  try {
      const response = await fetch(`${BASE_URL}/api/fragrance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            url: url.trim()
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to scrape fragrance');
    }

    return await response.json();

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Network error when trying to scrape fragrance';
    throw new Error(message);
  }
};

export const generateFragranceSummary = async (brand: string, name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/api/fragrance/summary`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                brand,
                name
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate fragrance summary');
        }

        const data = await response.json();
        return data.summary;

    } catch(error) {
        const message = error instanceof Error ? error.message : "Network error when trying to generate summary.";
        throw new Error(message);
    }
}

export const summarizeFragranceReviews = async (url: string) => {
    try {
        const response = await fetch(`${BASE_URL}/api/fragrance/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to summarize reviews');
        }

        return await response.json();
    } catch(error) {
        const message = error instanceof Error ? error.message : "Network error when trying to summarize reviews.";
        throw new Error(message);
    }
}