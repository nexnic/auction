/**
 * Storeage Load.js
 */

/**
 * 
 * @param {*} Value1 
 */
export function GetLocalStage(Value1) {
    try {
        return JSON.parse(localStorage.getItem(Value1))
    } catch {
        return false
    }
}