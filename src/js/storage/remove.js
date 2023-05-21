

export const remove = (key) => {
    localStorage.removeItem(key);
}

export const clean = () => {
    localStorage.clear()
} 