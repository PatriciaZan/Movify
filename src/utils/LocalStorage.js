export const getStoredFavorites = (key) => {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  }
  return [];
};

export const setStoredFavorites = (key, value) => {
  if (typeof window !== "undefined") {
    // Stringify the JavaScript array or object before storing it.
    localStorage.setItem(key, JSON.stringify(value));
  }
};
