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