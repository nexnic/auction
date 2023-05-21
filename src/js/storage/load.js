/**
 * Storeage Load.js
 */

/**
 * 
 * @param {*} UserData 
 */

export const load = (UserData) => {
    try {
        return JSON.parse(localStorage.getItem(UserData))
    } catch {
        return false
    }
}