

/**
 * @param {key} Key
 * @param {*} UserData 
 * @returns 
 */

export const save = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data)) 
}