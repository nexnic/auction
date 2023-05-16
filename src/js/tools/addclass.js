/**
 * 
 */


export const AddClass = (dom, key) => {
    document.querySelector(`${dom}`).classList.add(`${key}`)
}

export const RemClass = () => {
    document.querySelector(`${dom}`).classList.remove(`${key}`);
}