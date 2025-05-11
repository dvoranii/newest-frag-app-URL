export const getSavedFragranceUrl = (): string | null => {
    return localStorage.getItem('fragranceUrl');
};

export const clearSavedFragranceUrl = (): void => {
    localStorage.removeItem('fragranceUrl');
};