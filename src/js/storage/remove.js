

export const load = (key) => {
    localStorage.removeItem(key);
}

export const clean = () => {
    localStorage.clear()
} 